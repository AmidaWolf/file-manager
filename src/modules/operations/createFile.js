import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const createFile = (filePath) => {
  fs.open(checkAbsolutePathAndRefactorIt(filePath), 'w', (err) => {
    if (err) console.log(operationFailedErrorString)

    printCurrentlyDirectory()
  })
}