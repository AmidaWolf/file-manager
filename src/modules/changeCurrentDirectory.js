import { currentlyPathString, operationFailedErrorString } from "../constants.js";
import path from "path";
import { printCurrentlyDirectory } from "./printCurrentlyDirectory.js";

export const changeCurrentDirectory = (destination) => {
  const oldPathObj = path.parse(process.cwd())

  if (destination === '..') {
    if (oldPathObj.root === oldPathObj.dir && oldPathObj.base === '') {
      return printCurrentlyDirectory()
    }

    process.chdir(path.join(process.cwd(), '..'))
    console.log(currentlyPathString + process.cwd())
  } else {
    let destinationPath = path.normalize(destination)
    try {
      process.chdir(destinationPath)
    }
    catch (error) {
      console.log(operationFailedErrorString)
    }
    printCurrentlyDirectory()
  }
}