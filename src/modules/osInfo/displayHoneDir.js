import os from "os";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const displayHomeDir = () => {
  console.log(JSON.stringify(os.homedir()))

  printCurrentlyDirectory()
}