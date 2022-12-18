import os from "os";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const displayEOL = () => {
  console.log(JSON.stringify(os.EOL))

  printCurrentlyDirectory()
}