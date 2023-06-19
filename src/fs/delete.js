import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const path = './src/fs/files/fileToRemove.txt';

    if (existsSync(path)) {
        await rm(path);
    } else throw new Error('FS operation failed');
};

await remove();