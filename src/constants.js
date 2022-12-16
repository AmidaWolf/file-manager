import { parseUsernameInArgs } from "./modules/parseUsernameInArgs.js";
import { homedir } from "os";

export const startingDirectory = homedir()
process.chdir(startingDirectory)

export const helloString = `Welcome to the File Manager, ${parseUsernameInArgs()}!\n`
export const goodbyeString = `Thank you for using File Manager, ${parseUsernameInArgs()}, goodbye!\n`
export const currentlyPathString = `You are currently in `
export const invalidInputErrorString = 'Invalid input. \n'
export const operationFailedErrorString = 'Operation failed. \n'

export const navigation = {
  'up': 'up',
  'cd': 'cd ',
  'ls': 'ls'
}

export const operations = {
  'cat': 'cat', //read and console.log with readable stream
  'add': 'add', //create empty file
  'rn': 'rn', //rename file
  'cp': 'cp', //copy file with readable and writable
  'mv': 'mv', //move file with readable and writable
  'rm': 'rm', //remove file
}

export const osInfo = {
  'os --EOL': 'os --EOL',
  'os --cpus': 'os --cpus',
  'os --homedir': 'os --homedir',
  'os --username': 'os --username',
  'os --architecture': 'os --architecture',
}

export const hashOperation = {
  'hash': 'hash'
}

export const exitOperation = {
  'exit': '.exit'
}

export const archiveOperations = {
  'compress': 'compress', //using Brotli algorithm, should be done using Streams API
  'decompress': 'decompress' //using Brotli algorithm, should be done using Streams API
}