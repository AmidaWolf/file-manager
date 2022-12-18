import { operationFailedErrorString } from "../../constants.js";
import fs from "fs";
import path from "path";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const readFile = async (filePath) => {
  const readableStream = fs.createReadStream(path.join(process.cwd(), filePath));

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