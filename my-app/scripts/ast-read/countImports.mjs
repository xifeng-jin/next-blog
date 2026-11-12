import fs from 'fs';
import path from 'path';
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

let count = 0;

function scan(file) {
    const code = fs.readFileSync(file, 'utf8')

    const ast = parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
    });

    traverse.default(ast, {
        ImportDeclaration(){
            count ++;
        }
    })
};

scan('../../src/app/page.tsx')
console.log('count: ',count)