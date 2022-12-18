import fs from "fs";
import stream from "stream";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const moveFile = (filePath, fileNewPath) => {
  const paths = checkAbsolutePathAndRefactorIt(filePath, fileNewPath)

  const readableStream = fs.createReadStream(paths[0]);
  const writableStream = fs.createWriteStream(paths[1]);

  stream.pipeline(readableStream, writableStream, (error) => {
    if (error) console.log(operationFailedErrorString);
  })

  readableStream.on('end', ()=>{
    fs.unlink(filePath, (error) => {
      if (error) console.log(operationFailedErrorString);
    })

    printCurrentlyDirectory()
  });
}