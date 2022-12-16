import readline from "readline";
import {
  currentlyPathString,
  exitOperation,
  goodbyeString,
  helloString,
  invalidInputErrorString,
  navigation, startingDirectory
} from "../constants.js";
import { changeCurrentDirectory } from "./changeCurrentDirectory.js";
import { listingDirectories } from "./listingDirectories.js";

export const startReadLine = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.output.write(helloString);
  rl.output.write(currentlyPathString + startingDirectory + '\n')

  rl.on('line', input => {
    if (input === exitOperation.exit) {
      rl.close();
    } else if (input === navigation.up) {
      changeCurrentDirectory('..')
    } else if (input === navigation.ls) {
      listingDirectories()
    } else if (input.startsWith(navigation.cd)) {
      const arrayStrings = input.split(' ')

      if (arrayStrings.length === 1 || arrayStrings.length > 2) console.log(invalidInputErrorString)
      else {
        changeCurrentDirectory(arrayStrings[1])
      }
    } else {
      console.log(invalidInputErrorString)
    }
  });

  rl.on('close', () => {
    return console.log(goodbyeString);
  });
}