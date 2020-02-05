
/**
 * A custum test runner module could be usefull when the 
 */

// Please consider
// stdin - Standard input - this is the file handle that your process reads to get information from you.
// stdout - Standard output - your process writes normal information to this file handle.
// sterr - Standard error - your process writes error information to this file handle.

import { spawn } from 'child_process';

// because of windows
const cmd = 'npm.cmd'

const runApplicationUnderTest = spawn(cmd, ['run', 'start']); 
const runE2ETests = spawn(cmd, ['run', 'test']);

process.stdout.on('data', (data) => {
  console.log(`stdout: ${data} - added by Onno`);
});

process.stderr.on('data', (data) => {
  console.error(`stderr: ${data} - Onno adding`);
});

process.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
