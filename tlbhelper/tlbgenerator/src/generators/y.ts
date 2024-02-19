import { Address, BitString, Cell, Slice } from "ton-core";

export function fromBase64(base64: String, loadFunction: any) {
    let cell = Cell.fromBase64(base64.toString())
    let loadedType = loadFunction(cell.beginParse());
    return typeToJson(loadedType);
}

function typeToJson(obj: any) {
    let result: any = {}
    if (obj == undefined) {
        return null;
    }
    if (obj.kind) {
        result['kind'] = obj.kind;
    }
    if (typeof obj === 'number' || typeof obj === 'bigint' || typeof obj === 'string') {
        result = obj
    } else if (obj instanceof Address) {
        result = obj.toRawString();
    } else if (obj instanceof BitString) {
        result = '0b'
        for (let i = 0; i < obj.length; i++) {
            result += obj.at(i) ? '1' : '0';
        }
    } else if (obj instanceof Slice) {
        result = obj.asCell().toBoc().toString('base64')
    } else if (Object.prototype.toString.call(obj) === '[object Array]') {
        result = []
        obj.forEach((element: any) => {
            result.push(typeToJson(element))
        });
    } else {
        Object.keys(obj).forEach(function(key) {
            result[key] = typeToJson(obj[key]);
        });
    }
    return result;
}