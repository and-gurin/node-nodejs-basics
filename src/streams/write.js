import { createWriteStream } from 'node:fs'

const write = async () => {
    const writeStream = await createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();