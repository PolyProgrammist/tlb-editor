import { Address, BitString, Cell, Dictionary, beginCell } from "ton-core";
import { Simple, storeSimple } from "../../test/generated_files/generated_test";
import { TLBCode, TLBConstructor, TLBField, TLBFieldType, TLBType } from "../ast";
import { getSubStructName } from "../utils";
import util from 'util';
import { evaluateExpression } from "../astbuilder/utils";

let constructorsIndex: Map<string, TLBConstructor> = new Map<string, TLBConstructor>();

export function toBase64(typeName: string, tlbCode: TLBCode, json: any, method: any): String {
    let s = jsonToType(typeName, tlbCode, json);
    console.log(util.inspect(s, false, null, true))
    let builder = beginCell();
    method(s)(builder);
    return builder.asCell().toBoc().toString('base64');
}

function fillConstructorIndex(tlbCode: TLBCode) {
    if (constructorsIndex.size == 0) {
        tlbCode.types.forEach(tlbType => {
            tlbType.constructors.forEach(constructor => {
                constructorsIndex.set(getSubStructName(tlbType, constructor), constructor);
            })
        })
    }
}

function jsonToType(kindName: string, tlbCode: TLBCode, json: any) {
    fillConstructorIndex(tlbCode);

    let constructor = constructorsIndex.get(kindName);
    if (constructor) {
        return getTLBTypeResult(kindName, constructor, tlbCode, json, []);
    }
}

function getTLBTypeNameResult(kindName: string, tlbCode: TLBCode, json: any, parameters: TLBFieldType[]) {
    let constructor = constructorsIndex.get(kindName);
    if (constructor) {
        return getTLBTypeResult(kindName, constructor, tlbCode, json, parameters);
    }
}

function getTLBTypeResult(kindName: string, constructor: TLBConstructor, tlbCode: TLBCode, json: any, parameters: TLBFieldType[]) {
    return getTLBConstructorResult(kindName, constructor, tlbCode, json, parameters);

    // for (let i = 0; i < tlbType.constructors.length; i++) {
    //     let constructor = tlbType.constructors[i];
    //     let kind_name = getSubStructName(tlbType, constructor);
    //     console.log('getTLBTypeResult', json)
    //     if (kind_name == json.kind) {
    //         return getTLBConstructorResult(tlbType, constructor, tlbCode, json);
    //     }
    // }  
}

function getTLBConstructorResult(kindName: string, constructor: TLBConstructor, tlbCode: TLBCode, json: any, parameters: TLBFieldType[]) {
    let result: any = {};
    result.kind = kindName;

    constructor.variables.forEach(variable => {
        if (variable.type == "#" && !variable.isField) {
            result[variable.name] = json[variable.name];
        }
    })

    let y = new Map<string, TLBFieldType>();
    for (let i = 0; i < parameters.length; i++) {
        y.set(constructor.parameters[i].variable.name, parameters[i]);
    }

    constructor.fields.forEach((field) => {
        let json_to_pass = json.hasOwnProperty(field.name) ? json[field.name] : json;
        Object.assign(result, handleField(field, tlbCode, json_to_pass, y))
    });
    return result;
}

function handleField(
    field: TLBField,
    tlbCode: TLBCode,
    json: any,
    y: Map<string, TLBFieldType>
  ) {
    if (field.subFields.length == 0) {
        let res: any = {}
        res[field.name] = handleType(field, field.fieldType, tlbCode, json, y)
        return res
    } else {
        let res: any = {}
        field.subFields.forEach((fieldDef) => {
            let json_to_pass = json[fieldDef.name] != undefined ? json[fieldDef.name] : json;
            Object.assign(res, handleField(fieldDef, tlbCode, json_to_pass, y))
        });
        return res;
    }
    // let result: any = {}
    // if (field.subFields.length > 0) {
    //     field.subFields.forEach((fieldDef) => {
    //         handleField(fieldDef, json);
    //     });
    // }
    // if (field.subFields.length == 0) { 
    //     let res = handleType(field, field.fieldType, json);
    //     if (res) {
    //         result[field.name] = res;
    //     }
    // }
    // console.log(result);
    // return result;
}

function get_parameters(args: TLBFieldType[], y: Map<string, TLBFieldType>) {
    let res: TLBFieldType[] = []
    args.forEach(arg => {
        if (arg.kind == 'TLBNamedType' && y.has(arg.name)) {
            res.push(y.get(arg.name)!)
        } else {
            res.push(arg)
        }
    })
    return res;
}

function handleType(
    field: TLBField,
    fieldType: TLBFieldType,
    tlbCode: TLBCode,
    json: any,
    y: Map<string, TLBFieldType>
  ) {
    let res: any = json;

    // if (fieldType.kind == "TLBNumberType") {
    //     res = json;
    // } else 
    if (fieldType.kind == "TLBBitsType") {
        let builder = beginCell();
        for (let i = 2; i < json.length; i++) {
            let bit = parseInt(json[i]);
            builder.storeBit(bit);
        }
        res = builder.endCell().beginParse().loadBits(json.length - 2)
    } else if (fieldType.kind == "TLBCellType") {
        res = Cell.fromBase64(json.toString()).beginParse();
    } //else if (fieldType.kind == "TLBBoolType") {
    //     res = id('false');
    // } else if (fieldType.kind == "TLBCoinsType") {
    //     res = tNumericLiteral(0);
    // } else if (fieldType.kind == "TLBVarIntegerType") {
    //     res = tNumericLiteral(0);
    // } else 
    else if (fieldType.kind == "TLBAddressType") {
        if (json == null) {
            // console.log(json)
            res = null;
        } else {
            // console.log('hey', json)
            res = Address.parse(json);
        }
    } 
    else if (fieldType.kind == "TLBExprMathType") {
        res = json;
    } else if (fieldType.kind == "TLBNegatedType") {
        res = json;
    } else if (fieldType.kind == "TLBNamedType") {
        if (y.has(fieldType.name)) {
            let paramType = y.get(fieldType.name)!
            res = handleType(field, paramType, tlbCode, json, y);
        } else if (json['kind']) {
            let parameters = get_parameters(fieldType.arguments, y);
                res = getTLBTypeNameResult(json['kind'], tlbCode, json, parameters)
        }

        // if (y.has(fieldType.name)) {
        //     res = y.get(fieldType.name)
        // } else {
        //     let parameters: Expression[] = [];
        //     fieldType.arguments.forEach(argument => {
        //         if (argument.kind == 'TLBNamedType') {
        //             let tmp = this.getTLBTypeNameResult(argument.name, ctx, []);
        //             if (tmp) {
        //                 parameters.push(tmp);
        //             }
        //         } else {
        //             parameters.push(tNumericLiteral(1))
        //         }
        //     })
        //     res = this.getTLBTypeNameResult(fieldType.name, ctx, parameters)
        // }
    } else if (fieldType.kind == "TLBCondType") {
        if (json == null) {
            res = null;
        } else {
            res = handleType(field, fieldType.value, tlbCode, json[field.name], y);
        }
    } else if (fieldType.kind == "TLBMultipleType") {
        let x = handleType(field, fieldType.value, tlbCode, json[0], y)
        res = []
        let t = evaluateExpression(fieldType.times);
            if (t) {
                for (let i = 0; i < t; i++) {
                    res.push(x);
                }
        }
    // else if (fieldType.kind == "TLBCellInsideType") {
    //     // TODO
    } else if (fieldType.kind == "TLBHashmapType") {
        let x: Dictionary<number, number> = Dictionary.empty()
        
        // Object.entries(json).forEach(([key, value], index) => {
        //     x.set(key, value);
        // })

        res = x;

    } 
    
    return res;
}



/* 
    jsonToType('Simple', tlbCode, '{
        kind: 'Simple',
        a: 0,
        b: 0,
    }')
    = 
    x: Simple = { kind: 'Simple', a: 827, b: 387 }


    let jsonAddressUser = {
        kind: 'AddressUser',
        src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    }

    x: AddressUser = { kind: 'AddressUser', src: Address.parseFriendly('EQBmzW4wYlFW0tiBgj5sP1CgSlLdYs-VpjPWM7oPYPYWQEdT').address }
*/


/*
    let kind = json.kind
    let type = get_type_from(kind)
    for each field:
        if (field.type == )

*/