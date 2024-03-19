import { importTonDependencies } from '../pages/Main/utils';

export async function fromBase64(base64: String, loadFunction: any) {
    console.log(base64, loadFunction)
    const { Cell } = await importTonDependencies();;

    let cell = Cell.fromBase64(base64.toString())
    let loadedType = loadFunction(cell.beginParse());
    console.log(loadedType)
    return await typeToJson(loadedType);
}

async function typeToJson(obj: any) {
    const { Address, BitString, Slice, Dictionary } = await importTonDependencies();;

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
        obj.forEach(async (element: any) => {
            result.push(await typeToJson(element))
        });
    } else if (obj instanceof Dictionary) {
        result = {}
        obj.keys().forEach(async (key: any) => {
            result[key] = await typeToJson(obj.get(key))
        });
    } else {
        // console.log(typeof obj);
        Object.keys(obj).forEach(async function(key) {
            result[key] = await typeToJson(obj[key]);
            // console.log(key, result[key])
        });
    }
    // console.log(result);
    return result;
}