import { createReadStream ,createWriteStream } from 'node:fs';
import { pipeline  } from 'node:stream';
import { createGunzip } from 'node:zlib';
import { promisify } from 'node:util';

const decompress = async () => {
    const pipelineAsync = promisify(pipeline);
    const readStream = createReadStream('src/zip/files/archive.gz');
    const writeStream = createWriteStream('src/zip/files/fileToCompress.txt');

    await pipelineAsync (readStream, createGunzip(), writeStream)
};

await decompress();