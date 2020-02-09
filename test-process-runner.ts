
/**
 * A custum test runner module can be usefull when it's needed to run two processes at the same time. Like when an application needs to run in the front end, a sercive in the back end and at the same time protractor needs to run the tests. 
 * 
 * It uses child_process: https://nodejs.org/api/child_process.html
 */

/* Please consider the following in child_process:
stdin - Standard input - this is the file handle that your process reads to get information from you.
stdout - Standard output - your process writes normal information to this file handle.
sterr - Standard error - your process writes error information to this file handle.
 */
import { spawn } from 'child_process';

// because of windows
const cmd = 'npm.cmd'

const runApplicationUnderTest = spawn(cmd, ['run', 'start']); 
const runE2ETests = spawn(cmd, ['run', 'test']);

// process.stdout.on('data', (data) => {
//   console.log(`stdout: ${data} - added by Onno`);
// });

// process.stderr.on('data', (data) => {
//   console.error(`stderr: ${data} - Onno adding`);
// });

// process.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
