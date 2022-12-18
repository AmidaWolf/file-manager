import fs from "fs";
import crypto from "crypto"
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const calcHash = (filePath) => {
  const readableStream = fs.createReadStream(checkAbsolutePathAndRefactorIt(filePath));

  const hashSum = crypto.createHash('sha256');

  readableStream.on('error', function () {
    console.log(operationFailedErrorString);
  })

  readableStream.on('data', chunk => {
    hashSum.update(chunk);
  });

  readableStream.on('end', ()=>{
    console.log(hashSum.digest('hex'))
    console.log('\n')
    printCurrentlyDirectory()
  })
}