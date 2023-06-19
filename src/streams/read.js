import { createReadStream } from 'node:fs'

const read = async () => {
    const readStream = await createReadStream('src/streams/files/fileToRead.txt', 'utf8');
    readStream.on('data', (data) => {
        process.stdout.write(data);
    });
};

await read();