import {readFile, access, constants} from 'node:fs/promises';

const read = async () => {

    try {
        await access('./src/fs/files/fileToRead.txt', constants.F_OK);
    } catch {
        throw new Error('FS operation failed');
    }

    const filePath = new URL('./files/fileToRead.txt', import.meta.url);
    const contents = await readFile(filePath, {encoding: 'utf8'});
    console.log(contents);
};

await read();