import { operationFailedErrorString } from "../../constants.js";
import fs from "fs";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const readFile = async (filePath) => {
  const readableStream = fs.createReadStream(checkAbsolutePathAndRefactorIt(filePath));

  readableStream.on('error', function () {
    console.log(operationFailedErrorString);
  })

  readableStream.on('data', chunk => {
    process.stdout.write(chunk);
  });

  readableStream.on('end', ()=>{
    console.log('\n')
    printCurrentlyDirectory()
  });
};