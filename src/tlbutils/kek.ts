import { TLBCode, TLBType, getTLBCode 
    	// @ts-ignore
} from "@polyprogrammist_test/tlb-codegen/build";
import { toBase64 } from "./x";
import { fromBase64 } from "./y";
import { ALLMETHODS, } from "./generated_test";
import path from "path";
import util from "util";
import { getJson } from "./default_json";
import { ALLMETHODS_BLOCK } from "./generated_block";

function convertViceVersa(typeName: string, tlbCode: TLBCode, json: any, storeFunction: any, loadFunction: any) {
    let base64 = toBase64(typeName, tlbCode, json, storeFunction)
    let new_json = fromBase64(base64, loadFunction);
    return new_json;
}

let testkey = 'block'
let methods = testkey == 'test' ? ALLMETHODS : ALLMETHODS_BLOCK;

export async function g() {
    const fixturesDir = path.resolve(__dirname, 'test')
    let inputPath = path.resolve(fixturesDir, 'tlb', testkey + '.tlb');
    let tlbCode = getTLBCode(inputPath);
    
    let i = 0;
    tlbCode.types.forEach(async (tlbType: TLBType) => {
        if (tlbType.constructors[0].parameters.length > 0) {
            return;
        }
        if (["AccountBlock", "LibDescr", "ConfigParams", "McStateExtra"].includes(tlbType.name)) {
            return;
        }
        console.log(tlbType.name)
        let before: any;
        try {
            before = await getJson(tlbCode, tlbType)
            console.log(util.inspect(before, false, null, true));
            let after = convertViceVersa(before.kind, tlbCode, before, methods[tlbType.name][0], methods[tlbType.name][1]);
            console.log(util.inspect(after, false, null, true));
            console.log('--------------------------------------------------------')
        } catch (error: any) {
            if (error.message.includes('Number of bits should be known and not zero in field')) {
                return;
            } else if (error.message.includes('is not satisfied while')) {
                return;
            } else {
                console.log(error.message);
                throw error;
            }
        }
        i++;
    })
}

export async function onlyone() {
    const fixturesDir = path.resolve(__dirname, 'test')
    let inputPath = path.resolve(fixturesDir, 'tlb', testkey + '.tlb');
    let tlbCode = getTLBCode(inputPath);

    let tlbType = tlbCode.types.get('WorkchainDescr')!
    let before = await getJson(tlbCode, tlbType)
    before = JSON.parse(JSON.stringify(before));
    // console.log(util.inspect(before, false, null, true));
    let after = convertViceVersa(before.kind, tlbCode, before, methods[tlbType.name][0], methods[tlbType.name][1]);
    after = JSON.parse(JSON.stringify(after));
    console.log(util.inspect(after, false, null, true));
}

// f();
// x();
// g()
// onlyone();
// eval(`storeSimple`)