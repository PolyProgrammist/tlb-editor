import { TLBCode } from "./src/ast";
import { TypescriptGenerator } from "./src/generators/typescript/generator";
import { toBase64 } from "./src/generators/x";
import { generateCodeWithGenerator } from "./src/main";
import { storeAddressUser, storeInsideAddressUser, storeParamAndTypedArgUser, storeSimple, storeTwoMaybes, storeTwoSimples, storeTypedArgUser } from "./test/generated_files/generated_test";


function f() {
    let x: any = undefined;
    let getGenerator = (tlbCode: TLBCode) => {
        x = new TypescriptGenerator(tlbCode);
        return x;
    }

    generateCodeWithGenerator('test/tlb/test.tlb', 'kek.txt', getGenerator)

    if (x) {
        let tlbCode = x.tlbCode;
        [
            toBase64('Simple', tlbCode, {
                kind: 'Simple',
                a: 0,
                b: 0,
            }, storeSimple),
            toBase64('TypedArgUser', tlbCode, {
                kind: 'TypedArgUser',
                x: {
                    kind: 'TypedArg',
                    arg: {
                        kind: 'Simple',
                        a: 1,
                        b: 0,
                    },
                }
            }, storeTypedArgUser),
            toBase64('TwoSimples', tlbCode, {
                kind: 'TwoSimples',
                x: {
                    kind: 'Simple',
                    a: 0,
                    b: 0,
                },
                y: {
                    kind: 'Simple',
                    a: 0,
                    b: 0,
                }
            }, storeTwoSimples),
            toBase64('TwoMaybes', tlbCode, {
                kind: 'TwoMaybes',
                one_maybe: {
                    kind: 'Maybe_nothing',
                },
                second_maybe: {
                    kind: 'Maybe_nothing',
                },
            }, storeTwoMaybes),
            toBase64('ParamAndTypedArgUser', tlbCode, {
                kind: 'ParamAndTypedArgUser',
                x: {
                    kind: 'ParamAndTypedArg',
                    n: 5,
                    arg: {
                        kind: 'Simple',
                        a: 0,
                        b: 0,
                    },
                    c: 0,
                },
            }, storeParamAndTypedArgUser),
            toBase64('AddressUser', tlbCode, {
                kind: 'AddressUser',
                src: '0:0000000000000000000000000000000000000000000000000000000000000000',
            }, storeAddressUser),
            toBase64('InsideAddressUser', tlbCode, {
                kind: 'InsideAddressUser',
                inside: {
                    kind: 'AddressUser',
                    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
                },
            }, storeInsideAddressUser),
        ].forEach(y => { console.log(y) });
    }
}

f();