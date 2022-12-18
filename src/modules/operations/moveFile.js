import fs from "fs";
import path from "path";
import stream from "stream";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const moveFile = (filePath, fileNewPath) => {
  const readableStream = fs.createReadStream(path.join(process.cwd(), filePath));
  const writableStream = fs.createWriteStream(path.join(process.cwd(), fileNewPath));

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