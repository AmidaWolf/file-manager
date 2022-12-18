import os from "os";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const displayArch = () => {
  console.log(os.arch())

  printCurrentlyDirectory()
}