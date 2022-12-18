import os from "os";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const displayUsername = () => {
  console.log(os.userInfo().username)

  printCurrentlyDirectory()
}