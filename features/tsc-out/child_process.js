"use strict";
// Please consider
// stdin - Standard input - this is the file handle that your process reads to get information from you.
// stdout - Standard output - your process writes normal information to this file handle.
// sterr - Standard error - your process writes error information to this file handle.
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
// because of windows
var cmd = 'npm.cmd';
var process = child_process_1.spawn(cmd, ['run', 'test']);
process.stdout.on('data', function (data) {
    console.log("stdout: " + data + " - added by Onno");
});
process.stderr.on('data', function (data) {
    console.error("stderr: " + data + " - Onno adding");
});
process.on('close', function (code) {
    console.log("child process exited with code " + code);
});
