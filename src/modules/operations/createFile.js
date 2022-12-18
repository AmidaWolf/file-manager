import fs from "fs";
import { operationFailedErrorString } from "../../constants.js";
import path from "path";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const createFile = (filePath) => {
  fs.open(path.join(process.cwd(), filePath), 'w', (err) => {
    if (err) console.log(operationFailedErrorString)

    printCurrentlyDirectory()
  })
}