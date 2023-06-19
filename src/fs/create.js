import {writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs'

const create = async () => {

    if (!existsSync(`./src/fs/files/fresh.txt`)) {
        await writeFile(`./src/fs/files/fresh.txt`, 'I am fresh and young');
    } else throw new Error('FS operation failed');

};

await create();