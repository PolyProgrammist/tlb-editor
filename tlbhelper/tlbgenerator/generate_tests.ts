import path from 'path'
import util from 'util'
import { generateCode, getTLBCode } from './src/main'
import { DefaultJsonGenerator } from './src/generators/default_json/generator';
import fs from 'fs'
import { TLBCode, TLBType } from './src/ast';

export function getJson(tlbCode: TLBCode, tlbType: TLBType) {
  let jsonGen = new DefaultJsonGenerator(tlbCode);
  
  if (tlbType.constructors[0].parameters.length > 0) {
    return;
  }
  let res = jsonGen.addTlbType(tlbType)
  return res;
}

function genCodeForTest(name: string) {
  const fixturesDir = path.resolve(__dirname, 'test')
  let inputPath = path.resolve(fixturesDir, 'tlb', name + '.tlb');
  generateCode(inputPath, 'test/generated_files/generated_' + name + '.ts', 'typescript')

  let tlbCode = getTLBCode(inputPath);


  let result: any[] = [];
  tlbCode.types.forEach(tlbType => {
    let res = getJson(tlbCode, tlbType)
    result.push(res);
  })
  
  fs.writeFile('test/generated_files/json.json', JSON.stringify(result, null, 4), () => { });

}

genCodeForTest('block')
genCodeForTest('test')
