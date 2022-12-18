import path from "path";
import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const renameFile = (filePath, newFileName) => {
  fs.rename(path.join(process.cwd(), filePath), path.join(process.cwd(), newFileName), (error) => {
    if (error) console.log(operationFailedErrorString)

    printCurrentlyDirectory()
  });
}