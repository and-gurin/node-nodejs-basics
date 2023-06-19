import { Transform, pipeline  } from 'node:stream';
import { promisify } from 'node:util';

const transform = async () => {
    const pipelineAsync = promisify(pipeline);
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })
    await pipelineAsync (process.stdin, transformData, process.stdout)
};

await transform();