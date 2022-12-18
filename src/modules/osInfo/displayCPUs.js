import os from "os";
import { printCurrentlyDirectory } from "../helpers/printCurrentlyDirectory.js";

export const displayCPUs = () => {
  const osCpus = os.cpus()

  osCpus.forEach((obj)=> {
    delete obj.times
  })

  console.log('Total processors: ' + osCpus.length)
  console.table(osCpus)

  printCurrentlyDirectory()
}