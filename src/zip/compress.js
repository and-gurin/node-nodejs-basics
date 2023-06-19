import { createReadStream ,createWriteStream } from 'node:fs';
import { pipeline  } from 'node:stream';
import { createGzip } from 'node:zlib';
import { promisify } from 'node:util';

const compress = async () => {
    const pipelineAsync = promisify(pipeline);
    const readStream = createReadStream('src/zip/files/fileToCompress.txt', 'utf8');
    const writeStream = createWriteStream('src/zip/files/archive.gz');

    await pipelineAsync (readStream, createGzip(), writeStream)
};

await compress();