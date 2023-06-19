import { fork } from'node:child_process';

const spawnChildProcess = async (args) => {
    const childProcess = fork('./src/fs/files/script.js', args, { silent: true });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
