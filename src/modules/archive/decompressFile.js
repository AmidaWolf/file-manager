import zlib from "zlib";
import fs from "fs";
import stream from "stream";
import { operationFailedErrorString } from "../../constants.js";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";
import { checkAbsolutePathAndRefactorIt } from "../helpers/checkAbsolutePathAndRefactorIt.js";

export const decompressFile = (filePath, decompressedFilePath) => {
  const paths = checkAbsolutePathAndRefactorIt(filePath, decompressedFilePath)

  const readableStream = fs.createReadStream(paths[0]);
  const writableStream = fs.createWriteStream(paths[1]);

  const brotli = zlib.createBrotliDecompress();

  stream.pipeline(readableStream, brotli, writableStream, (error) => {
    if (error) console.log(operationFailedErrorString);
  })

  printCurrentlyDirectory()
}