import { createHash } from 'node:crypto'

const calculateHash = async () => {
    const hash = await createHash('sha256').update('./files/fileToCalculateHashFor.txt').digest('hex');
    console.log(hash)
};

await calculateHash();