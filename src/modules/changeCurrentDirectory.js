import { currentlyPathString, operationFailedErrorString } from "../constants.js";
import path from "path";

export const changeCurrentDirectory = (destination) => {
  const oldPathObj = path.parse(process.cwd())

  if (destination === '..') {
    if (oldPathObj.root === oldPathObj.dir && oldPathObj.base === '') {
      return console.log(currentlyPathString + process.cwd())
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
    console.log(currentlyPathString + process.cwd())
  }
}