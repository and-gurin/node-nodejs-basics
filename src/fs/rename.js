import { existsSync } from 'node:fs';
import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath = './src/fs/files/properFilename.md';

    if (existsSync('./src/fs/files/wrongFilename.txt') && !existsSync('./src/fs/files/properFilename.md')) {
        await renameFile(oldPath, newPath);
    } else throw new Error('FS operation failed');};

await rename();