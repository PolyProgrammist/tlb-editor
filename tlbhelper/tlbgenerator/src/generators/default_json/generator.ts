import { beginCell } from "ton";
import { TLBCode, TLBField, TLBFieldType, TLBType } from "../../ast"
import { CodeBuilder } from "../CodeBuilder"
import { CodeGenerator, CommonGenDeclaration } from "../generator"
import { Expression, GenDeclaration, ObjectExpression, ObjectProperty, TheNode, id, tDeclareVariable, tIdentifier, tNumericLiteral, tObjectExpression, tObjectProperty, tStringLiteral, tTypedIdentifier, toCode } from "../typescript/tsgen"

export type JsonContext = {
    constructorsReached: Map<String, number>;
}

export class DefaultJsonGenerator implements CodeGenerator {
    jsCodeDeclarations: GenDeclaration[] = [];
    jsCodeConstructorDeclarations: CommonGenDeclaration[] = []
    jsCodeFunctionsDeclarations: CommonGenDeclaration[] = []
    tlbCode: TLBCode;

    constructor(tlbCode: TLBCode) {
        this.tlbCode = tlbCode;
    }

    addTonCoreClassUsage(name: string): void {}
    addBitLenFunction(): void {}

    addTlbType(tlbType: TLBType): void {

        let ctx :JsonContext = {
            constructorsReached: new Map<String, number>(),
        }

        let x = this.getTLBTypeNameResult(tlbType.name, ctx);

        if (x) {
            this.jsCodeConstructorDeclarations.push(tDeclareVariable(id('json' + tlbType.name), x));
        }
    }

    getTLBTypeNameResult(tlbTypeName: string, ctx: JsonContext): ObjectExpression | undefined {
        let tlbType = this.tlbCode.types.get(tlbTypeName);
        if (tlbType) {
            return this.getTLBTypeResult(tlbType, ctx);
        }
    }

    getTLBTypeResult(tlbType: TLBType, ctx: JsonContext): ObjectExpression | undefined {
        if (ctx.constructorsReached.has(tlbType.name)) {
            return undefined;
        }

        for (let i = 0; i < tlbType.constructors.length; i++) {
            let constructor = tlbType.constructors[i];
            ctx.constructorsReached.set(tlbType.name, i);
            let x: ObjectProperty[] = [];
    
            let hasParams = false;
            constructor.parameters.forEach(parameter => {
                if (parameter.variable.type == 'Type') {
                    hasParams = true;
                    return;
                }
            })
    
            if (hasParams) { // TODO add params if inside 
                return;
            }
    
            x.push(tObjectProperty(id('kind'), tStringLiteral(tlbType.name)));
            
            constructor.variables.forEach(variable => {
                if (variable.type == "#" && !variable.isField) {
                    x.push(
                      tObjectProperty(id(variable.name), tNumericLiteral(0))
                    );
                }
            })
    
            constructor.fields.forEach((field) => {
                this.handleField(field, x, ctx);
            });
            return tObjectExpression(x);
        }  
    }

    handleField(
        field: TLBField,
        x: ObjectProperty[],
        ctx: JsonContext
      ) {
        if (field.subFields.length > 0) {
            field.subFields.forEach((fieldDef) => {
                this.handleField(fieldDef, x, ctx);
            });
        }
        if (field.subFields.length == 0) { 
            let res = this.handleType(field, field.fieldType, ctx);
            if (res) {
                x.push(tObjectProperty(id(field.name), res))
            }
        }
    }

    handleType(
        field: TLBField,
        fieldType: TLBFieldType,
        ctx: JsonContext
      ) : Expression | undefined {
        let res: Expression | undefined = undefined;

        if (fieldType.kind == "TLBNumberType") {
            res = tNumericLiteral(0);
        } else if (fieldType.kind == "TLBBitsType") {
            res = id('0b0')
        } else if (fieldType.kind == "TLBCellType") {
            res = tStringLiteral(beginCell().endCell().toBoc().toString('base64'));
        } else if (fieldType.kind == "TLBBoolType") {
            res = id('false');
        } else if (fieldType.kind == "TLBCoinsType") {
            res = tNumericLiteral(0);
        } else if (fieldType.kind == "TLBVarIntegerType") {
            res = tNumericLiteral(0);
        } else if (fieldType.kind == "TLBAddressType") {
            res = tStringLiteral("0:0000000000000000000000000000000000000000000000000000000000000000");
        } else if (fieldType.kind == "TLBExprMathType") {
            res = tNumericLiteral(0);
        } else if (fieldType.kind == "TLBNegatedType") {
            res = tNumericLiteral(0);
        } else if (fieldType.kind == "TLBNamedType") {
           res = this.getTLBTypeNameResult(fieldType.name, ctx)
           // TODO handle infinite recursion
        } else if (fieldType.kind == "TLBCondType") {
            // TODO
        } else if (fieldType.kind == "TLBMultipleType") {
            // TODO
        } else if (fieldType.kind == "TLBCellInsideType") {
            // TODO
        } else if (fieldType.kind == "TLBHashmapType") {
          res = tObjectExpression([])
        } 
        
        return res;
    }

    toCode(node: TheNode, code: CodeBuilder): CodeBuilder {
        return toCode(node, code)
    }
}

