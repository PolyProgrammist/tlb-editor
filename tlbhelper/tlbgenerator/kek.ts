import { TLBCode } from "./src/ast";
import { TypescriptGenerator } from "./src/generators/typescript/generator";
import { toBase64 } from "./src/generators/x";
import { generateCodeWithGenerator } from "./src/main";
import { storeSimple, storeTwoMaybes, storeTwoSimples, storeTypedArgUser } from "./test/generated_files/generated_test";


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
                    b: {
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
            }, storeTwoMaybes)
        ].forEach(y => { console.log(y) });
    }
}

f();