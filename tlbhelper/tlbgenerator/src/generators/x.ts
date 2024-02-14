import { beginCell } from "ton-core";
import { Simple, storeSimple } from "../../test/generated_files/generated_test";
import { TLBCode, TLBConstructor, TLBField, TLBFieldType, TLBType } from "../ast";
import { getSubStructName } from "../utils";

export function toBase64(typeName: string, tlbCode: TLBCode, json: any, method: any): String {
    let s = jsonToType(typeName, tlbCode, json);
    console.log(s);
    let builder = beginCell();
    method(s)(builder);
    return builder.asCell().toString('base64');
}

function jsonToType(typeName: string, tlbCode: TLBCode, json: any) {
    let tlbType = tlbCode.types.get(typeName);
    if (tlbType) {
        return getTLBTypeResult(tlbType, json);
    }

}

function getTLBTypeResult(tlbType: TLBType, json: any) {
    for (let i = 0; i < tlbType.constructors.length; i++) {
        let constructor = tlbType.constructors[i];
        let kind_name = getSubStructName(tlbType, constructor);
        if (kind_name == json.kind) {
            return getTLBConstructorResult(tlbType, constructor, json);
        }
    }  
}

function getTLBConstructorResult(tlbType: TLBType, constructor: TLBConstructor, json: any) {
    let result: any = {};
    result.kind = getSubStructName(tlbType, constructor);

    constructor.variables.forEach(variable => {
        if (variable.type == "#" && !variable.isField) {
            result[variable.name] = 0;
        }
    })

    constructor.fields.forEach((field) => {
        result[field.name] = handleField(field, json[field.name]);
    });
    return result;
}

function handleField(
    field: TLBField,
    json: any
  ) {
    return handleType(field, field.fieldType, json);
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
    // } else if (fieldType.kind == "TLBAddressType") {
    //     res = tStringLiteral("0:0000000000000000000000000000000000000000000000000000000000000000");
    // } else if (fieldType.kind == "TLBExprMathType") {
    //     res = tNumericLiteral(0);
    // } else if (fieldType.kind == "TLBNegatedType") {
    //     res = tNumericLiteral(0);
    // } else if (fieldType.kind == "TLBNamedType") {
    //     if (y.has(fieldType.name)) {
    //         res = y.get(fieldType.name)
    //     } else {
    //         let parameters: Expression[] = [];
    //         fieldType.arguments.forEach(argument => {
    //             if (argument.kind == 'TLBNamedType') {
    //                 let tmp = this.getTLBTypeNameResult(argument.name, ctx, []);
    //                 if (tmp) {
    //                     parameters.push(tmp);
    //                 }
    //             } else {
    //                 parameters.push(tNumericLiteral(1))
    //             }
    //         })
    //         res = this.getTLBTypeNameResult(fieldType.name, ctx, parameters)
    //     }
    // } else if (fieldType.kind == "TLBCondType") {
        
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