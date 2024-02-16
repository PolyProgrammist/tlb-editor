import path from 'path'
import util from 'util'
import { generateCode, getTLBCode } from './src/main'
import { DefaultJsonGenerator } from './src/generators/default_json/generator';
import fs from 'fs'
import { TLBCode, TLBType } from './src/ast';


function genCodeForTest(name: string) {
  const fixturesDir = path.resolve(__dirname, 'test')
  let inputPath = path.resolve(fixturesDir, 'tlb', name + '.tlb');
  generateCode(inputPath, 'test/generated_files/generated_' + name + '.ts', 'typescript')

  let tlbCode = getTLBCode(inputPath);


  let result: any[] = [];
  tlbCode.types.forEach(tlbType => {
    // let res = getJson(tlbCode, tlbType)
    // result.push(res);
  })
  
  fs.writeFile('test/generated_files/json.json', JSON.stringify(result, null, 4), () => { });

}

genCodeForTest('block')
genCodeForTest('test')
