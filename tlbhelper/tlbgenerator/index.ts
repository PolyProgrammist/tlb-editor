import { generateCode } from './src/main';

export { CodeGenerator } from './src/generators/generator';
export { TypescriptGenerator } from './src/generators/typescript/generator';
export {
	generateCode,
	generateCodeByAST,
	generateCodeWithGenerator,
} from './src/main';

console.log('hello');
