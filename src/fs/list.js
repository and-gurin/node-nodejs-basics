import {readdir, access, constants} from 'node:fs/promises';


const list = async () => {

    const path = './src/fs/files';

    try {
        await access('./src/fs/files', constants.F_OK);
    } catch {
        throw new Error('FS operation failed');
    }

    const files = await readdir(path);
    for (const file of files)
        console.log(file);

};

await list();