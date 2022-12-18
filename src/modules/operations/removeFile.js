import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const removeFile = (filePath) => {
  fs.unlink(checkAbsolutePathAndRefactorIt(filePath), (error) => {
    if (error) console.log(operationFailedErrorString);

    printCurrentlyDirectory()
  })
}