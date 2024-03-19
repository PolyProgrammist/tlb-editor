import { generateCode } from './src/main';

export { CodeGenerator } from './src/generators/generator';
export { TypescriptGenerator } from './src/generators/typescript/generator';
export {
	generateCode,
	generateCodeByAST,
	generateCodeWithGenerator,
} from './src/main';

export { getJson as getDefaultJson } from './kek';
export { toBase64 as jsonToBase64 } from './src/generators/x';
export { fromBase64 as base64ToJson } from './src/generators/y';
