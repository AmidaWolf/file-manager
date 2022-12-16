import { currentlyPathString } from "../constants.js";

export const printCurrentlyDirectory = () => {
  console.log(currentlyPathString + process.cwd() + '\n')
}