import readline from "readline";
import {
  currentlyPathString,
  exitOperation,
  goodbyeString,
  helloString,
  invalidInputErrorString,
  navigation, operations, startingDirectory
} from "../constants.js";
import { changeCurrentDirectory } from "./navigation/changeCurrentDirectory.js";
import { listingDirectories } from "./navigation/listingDirectories.js";
import { readFile } from "./operations/readFile.js";
import { createFile } from "./operations/createFile.js";
import { renameFile } from "./operations/renameFile.js";
import { copyFile } from "./operations/copyFile.js";
import { moveFile } from "./operations/moveFile.js";
import { removeFile } from "./operations/removeFile.js";

export const startReadLine = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.output.write(helloString);
  rl.output.write(currentlyPathString + startingDirectory + '\n')

  rl.on('line', async input => {
    if (input === exitOperation.exit) {
      rl.close();
    } else if (input === navigation.up) {
      changeCurrentDirectory('..')
    } else if (input === navigation.ls) {
      listingDirectories()
    } else if (input.startsWith(navigation.cd)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 2) {
        console.log(invalidInputErrorString)
      } else {
        changeCurrentDirectory(arrayStrings[1])
      }
    } else if (input.startsWith(operations.cat)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 2) {
        console.log(invalidInputErrorString)
      } else {
        await readFile(arrayStrings[1])
      }
    } else if (input.startsWith(operations.add)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 2) {
        console.log(invalidInputErrorString)
      } else {
        createFile(arrayStrings[1])
      }
    } else if (input.startsWith(operations.rn)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 3) {
        console.log(invalidInputErrorString)
      } else {
        renameFile(arrayStrings[1], arrayStrings[2])
      }
    } else if (input.startsWith(operations.cp)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 3) {
        console.log(invalidInputErrorString)
      } else {
        copyFile(arrayStrings[1], arrayStrings[2])
      }
    } else if (input.startsWith(operations.mv)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 3) {
        console.log(invalidInputErrorString)
      } else {
        moveFile(arrayStrings[1], arrayStrings[2])
      }
    } else if (input.startsWith(operations.rm)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 2) {
        console.log(invalidInputErrorString)
      } else {
        removeFile(arrayStrings[1])
      }
    } else {
      console.log(invalidInputErrorString)
    }
  });

  rl.on('close', () => {
    return console.log(goodbyeString);
  });
}