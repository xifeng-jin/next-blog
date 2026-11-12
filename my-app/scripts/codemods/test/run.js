
import fs from 'fs';
import path from 'path';
import { argv } from 'process';
import jscodeshift from 'jscodeshift';

// npm i jscodeshift -D
const j = jscodeshift.withParser('tsx');
// console.log(j)
// const file = fs.readFileSync()
// const root = j()


console.log(process.argv)

// 收集指定的文件
const COLLECT_FILES = new Set(['.js', '.jsx', '.ts', '.tsx']);
// 排除不需要遍历的文件夹
const BLANK_DIR = new Set(['mock']);
// 排除不需要收集的文件
const BLANK_FILE = ['.d'];

console.log('process.cwd(): ', process.cwd())

// --dir path1 ,path2, path3 表示从哪个/哪些文件目录开始查找
function pargeArg(args){
    const opt = {
        repo: process.cwd(),
        dirs: ["src"],
    };

    for(let i = 0 ; i < args.length ; i++){
        const arg = args[i];
        const next = () => {
            i += 1;
            if(i >= argv.length) throw new Error(`dones not find ${arg}`);
            return args[i]
        }
        if(arg === 'dir') {
            opt.dirs = next().split(',').map(f => f.trim().replace(/\\/i, '/')).filter(Boolean);
        }
    };
    return opt;
}

const isNotBlankFile = (file) => BLANK_FILE.filter(bFile => file.includes(bFile)).length === 0

function extractAllFiles(repo, dirs) {
    const outPut = new Set();

    function collectTargetFile(fileName) {
        const name = path.basename(fileName, path.extname(fileName));

        return isNotBlankFile(name) && COLLECT_FILES.has(path.extname(fileName))
    }

    function findFiles(dir) {
        const dirEntrys = fs.readdirSync(dir, { withFileTypes: true }); // 读取所有的文件，同时具有方法，其中name 返回文件名
        for(const dirEntry of dirEntrys) {
            const fullPath = path.join(dir, dirEntry.name);
            if(dirEntry.isDirectory()) {
                // 这里可以考虑是否需要跳过文件
                if(BLANK_DIR.has(dirEntry.name)) continue;
                findFiles(fullPath);
            } else if(collectTargetFile(dirEntry.name)) {
                // 这里需要严格确定收集什么文件
                outPut.add(fullPath);
            }
        }
    };

    for(const dir of dirs) {
        const abs = path.resolve(repo, dir);
        if(!fs.existsSync(abs)) {
            console.error(`${abs} have not files`);
            continue;
        } else if(fs.statSync(abs).isDirectory()) {
            findFiles(dir);
        }
    }

    return [...outPut]
};

function run() {
    const opt = pargeArg(process.argv.slice(2))
    const allFiles = extractAllFiles(opt.repo, opt.dirs);
    console.log('allFiles: ', allFiles, allFiles.length)
    console.log('running...')
};

run();
