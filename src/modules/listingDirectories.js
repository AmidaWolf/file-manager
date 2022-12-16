import fs from "fs";
import { sortDirsAndFiles } from "./sortDirsAndFiles.js";
import { currentlyPathString } from "../constants.js";

export const listingDirectories = () => {
  fs.readdir(process.cwd(), {withFileTypes: true},  (err, files) => {
    const arrFiles = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.isDirectory()) {
        arrFiles.push({
          'Name': file.name,
          'Type': 'directory'
        })
      } else {
        arrFiles.push(
          {
            'Name': file.name,
            'Type': 'file'
          }
        )
      }
    }

    arrFiles.sort(sortDirsAndFiles)

    console.table(arrFiles)
    console.log(currentlyPathString + process.cwd())
  });
}