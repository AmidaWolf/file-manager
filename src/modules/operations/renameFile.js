import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const renameFile = (filePath, newFileName) => {
  const paths = checkAbsolutePathAndRefactorIt(filePath, newFileName)

  fs.rename(paths[0], paths[1], (error) => {
    if (error) console.log(operationFailedErrorString)

    printCurrentlyDirectory()
  });
}