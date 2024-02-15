import { beginCell } from "ton";
import { TLBCode, TLBConstructor, TLBField, TLBFieldType, TLBParameter, TLBType } from "../../ast"
import { CodeBuilder } from "../CodeBuilder"
import { CodeGenerator, CommonGenDeclaration } from "../generator"
import { Expression, GenDeclaration, ObjectExpression, ObjectProperty, TheNode, id, tDeclareVariable, tIdentifier, tNumericLiteral, tObjectExpression, tObjectProperty, tStringLiteral, tTypedIdentifier, toCode } from "../typescript/tsgen"
import { getSubStructName } from "../../utils";

export type JsonContext = {
    constructorsReached: Set<String>;
    constructorsCalculated: Map<String, number>;
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

    addTlbType(tlbType: TLBType): any {

        let ctx :JsonContext = {
            constructorsReached: new Set<String>(),
            constructorsCalculated: new Map<String, number>()
        }

        let x = this.getTLBTypeNameResult(tlbType.name, ctx, []);

        return x;
    }

    getTLBTypeNameResult(tlbTypeName: string, ctx: JsonContext, parameters: Expression[]): ObjectExpression | undefined {
        let tlbType = this.tlbCode.types.get(tlbTypeName);
        if (tlbType) {
            return this.getTLBTypeResult(tlbType, ctx, parameters);
        }
    }

    getTLBConstructorResult(tlbType: TLBType, constructor: TLBConstructor, ctx: JsonContext, parameters: Expression[], constructorIdx: number): ObjectExpression | undefined {
        ctx.constructorsReached.add(tlbType.name);
        let x: any = {};

        let hasParams = false;
        constructor.parameters.forEach(parameter => {
            if (parameter.variable.type == 'Type') {
                hasParams = true;
            }
        })

        let y: Map<String, Expression> = new Map<String, Expression>();
        if (parameters.length != constructor.parameters.length && hasParams) {
            return undefined;
        }
        for (let i = 0; i < parameters.length; i++) {
            y.set(constructor.parameters[i].variable.name, parameters[i]);
        }

        x.kind = getSubStructName(tlbType, constructor);
        
        constructor.variables.forEach(variable => {
            if (variable.type == "#" && !variable.isField) {
                x[variable.name] = 0;
            }
        })

        constructor.fields.forEach((field) => {
            this.handleField(field, x, ctx, y);
        });
        ctx.constructorsCalculated.set(tlbType.name, constructorIdx);
        return x;
    }

    getTLBTypeResult(tlbType: TLBType, ctx: JsonContext, parameters: Expression[]): any | undefined {
        if (ctx.constructorsReached.has(tlbType.name)) {
            let i = ctx.constructorsCalculated.get(tlbType.name)
            if (i != undefined) {
                return this.getTLBConstructorResult(tlbType, tlbType.constructors[i], ctx, parameters, i);
            }
            return undefined;
        }

        for (let i = 0; i < tlbType.constructors.length; i++) {
            let constructor = tlbType.constructors[i];
            let expr = this.getTLBConstructorResult(tlbType, constructor, ctx, parameters, i);
            if (expr) {
                return expr;
            }
        }  
    }

    handleField(
        field: TLBField,
        x: any,
        ctx: JsonContext,
        y: Map<String, Expression>
      ) {
        if (field.subFields.length > 0) {
            field.subFields.forEach((fieldDef) => {
                this.handleField(fieldDef, x, ctx, y);
            });
        }
        if (field.subFields.length == 0) { 
            let res = this.handleType(field, field.fieldType, ctx, y);
            if (res != undefined) {
                x[field.name] = res;
            }
        }
    }

    handleType(
        field: TLBField,
        fieldType: TLBFieldType,
        ctx: JsonContext,
        y: Map<String, Expression>
      ) : any | undefined {
        let res: any | undefined = undefined;

        if (fieldType.kind == "TLBNumberType") {
            res = 0;
        } else if (fieldType.kind == "TLBBitsType") {
            res = 0b0;
        } else if (fieldType.kind == "TLBCellType") {
            res = beginCell().endCell().toBoc().toString('base64');
        } else if (fieldType.kind == "TLBBoolType") {
            res = false;
        } else if (fieldType.kind == "TLBCoinsType") {
            res = 0;
        } else if (fieldType.kind == "TLBVarIntegerType") {
            res = 0;
        } else if (fieldType.kind == "TLBAddressType") {
            res = "0:0000000000000000000000000000000000000000000000000000000000000000";
        } else if (fieldType.kind == "TLBExprMathType") {
            res = 0;
        } else if (fieldType.kind == "TLBNegatedType") {
            res = 0;
        } else if (fieldType.kind == "TLBNamedType") {
            if (y.has(fieldType.name)) {
                res = y.get(fieldType.name)
            } else {
                let parameters: any[] = [];
                fieldType.arguments.forEach(argument => {
                    if (argument.kind == 'TLBNamedType') {
                        let tmp = this.getTLBTypeNameResult(argument.name, ctx, []);
                        if (tmp) {
                            parameters.push(tmp);
                        }
                    } else {
                        parameters.push(1)
                    }
                })
                res = this.getTLBTypeNameResult(fieldType.name, ctx, parameters)
            }
        } else if (fieldType.kind == "TLBCondType") {
            
        } else if (fieldType.kind == "TLBMultipleType") {
            // TODO
        } else if (fieldType.kind == "TLBCellInsideType") {
            // TODO
        } else if (fieldType.kind == "TLBHashmapType") {
          res = {}
        } 
        
        return res;
    }

    toCode(node: TheNode, code: CodeBuilder): CodeBuilder {
        return toCode(node, code)
    }
}

