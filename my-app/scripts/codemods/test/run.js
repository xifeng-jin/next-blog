
import fs from 'fs';
import path from 'path';

const opt = {
    // __dirname is not defined in ES module scope
    // repo: path.resolve(__dirname, '..', '..', '..', '..'),
    repo: process.cwd(),
    dirs: ["src"],
}

const COLLECT_FILES = new Set(['.js', '.jsx', '.ts', '.tsx']);
const BLANK_DIR = new Set(['mock']);

function extractAllFiles(repo, dirs) {
    const outPut = new Set();

    function findFiles(dir) {
        const dirEntrys = fs.readdirSync(dir, { withFileTypes: true }); // 读取所有的文件，同时具有方法，其中name 返回文件名
        for(const dirEntry of dirEntrys) {
            const fullPath = path.join(dir, dirEntry.name);
            if(dirEntry.isDirectory()) {
                // 这里可以考虑是否需要跳过文件
                if(BLANK_DIR.has(dirEntry.name)) continue;
                findFiles(fullPath);
            } else if(COLLECT_FILES.has(path.extname(dirEntry.name))) {
                // 这里需要严格确定收集什么文件
                outPut.add(full);
            }
        }
    }

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
}

function run() {
    const allFiles = extractAllFiles(opt.repo, opt.dirs);
    console.log(allFiles.length)
    console.log('running...')
};

run();
