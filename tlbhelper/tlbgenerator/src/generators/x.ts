import { Address, beginCell } from "ton-core";
import { Simple, storeSimple } from "../../test/generated_files/generated_test";
import { TLBCode, TLBConstructor, TLBField, TLBFieldType, TLBType } from "../ast";
import { getSubStructName } from "../utils";

let constructorsIndex: Map<string, TLBConstructor> = new Map<string, TLBConstructor>();

export function toBase64(typeName: string, tlbCode: TLBCode, json: any, method: any): String {
    let s = jsonToType(typeName, tlbCode, json);
    // console.log(s);
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
        return getTLBTypeResult(kindName, constructor, tlbCode, json);
    }

}

function getTLBTypeNameResult(kindName: string, tlbCode: TLBCode, json: any) {
    let constructor = constructorsIndex.get(kindName);
    if (constructor) {
        return getTLBTypeResult(kindName, constructor, tlbCode, json);
    }
}

function getTLBTypeResult(kindName: string, constructor: TLBConstructor, tlbCode: TLBCode, json: any) {
    return getTLBConstructorResult(kindName, constructor, tlbCode, json);

    // for (let i = 0; i < tlbType.constructors.length; i++) {
    //     let constructor = tlbType.constructors[i];
    //     let kind_name = getSubStructName(tlbType, constructor);
    //     console.log('getTLBTypeResult', json)
    //     if (kind_name == json.kind) {
    //         return getTLBConstructorResult(tlbType, constructor, tlbCode, json);
    //     }
    // }  
}

function getTLBConstructorResult(kindName: string, constructor: TLBConstructor, tlbCode: TLBCode, json: any) {
    let result: any = {};
    result.kind = kindName;

    constructor.variables.forEach(variable => {
        if (variable.type == "#" && !variable.isField) {
            result[variable.name] = json[variable.name];
        }
    })

    constructor.fields.forEach((field) => {
        result[field.name] = handleField(field, tlbCode, json[field.name]);
    });
    return result;
}

function handleField(
    field: TLBField,
    tlbCode: TLBCode,
    json: any
  ) {
    return handleType(field, field.fieldType, tlbCode, json);
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

function handleType(
    field: TLBField,
    fieldType: TLBFieldType,
    tlbCode: TLBCode,
    json: any
  ) {
    let res: any = json;

    // if (fieldType.kind == "TLBNumberType") {
    //     res = json;
    // } else if (fieldType.kind == "TLBBitsType") {
    //     res = 0b0;
    // } else if (fieldType.kind == "TLBCellType") {
    //     res = tStringLiteral(beginCell().endCell().toBoc().toString('base64'));
    // } else if (fieldType.kind == "TLBBoolType") {
    //     res = id('false');
    // } else if (fieldType.kind == "TLBCoinsType") {
    //     res = tNumericLiteral(0);
    // } else if (fieldType.kind == "TLBVarIntegerType") {
    //     res = tNumericLiteral(0);
    // } else 
    if (fieldType.kind == "TLBAddressType") {
        res = Address.parse(json);
    } 
    else if (fieldType.kind == "TLBExprMathType") {
        res = json;
    } else if (fieldType.kind == "TLBNegatedType") {
        res = json;
    } else if (fieldType.kind == "TLBNamedType") {
        let parameters: any[] = [];
        res = getTLBTypeNameResult(json['kind'], tlbCode, json)

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
    } 
    //else if (fieldType.kind == "TLBCondType") {
        
    // } else if (fieldType.kind == "TLBMultipleType") {
    //     // TODO
    // } else if (fieldType.kind == "TLBCellInsideType") {
    //     // TODO
    // } else if (fieldType.kind == "TLBHashmapType") {
    //   res = tObjectExpression([])
    // } 
    
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