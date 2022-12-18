import path from "path";
import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const removeFile = (filePath) => {
  fs.unlink(path.join(process.cwd(), filePath), (error) => {
    if (error) console.log(operationFailedErrorString);

    printCurrentlyDirectory()
  })
}