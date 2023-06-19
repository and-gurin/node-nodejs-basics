import { existsSync } from 'node:fs';
import { cp } from 'node:fs/promises';

const copy = async () => {

    const src = './src/fs/files';
    const dest = './src/fs/files_copy';

    if (existsSync('src/fs/files') && !existsSync('src/fs/files_copy')) {
        await cp(src, dest, {recursive: true});
    } else throw new Error('FS operation failed');
}
await copy();
