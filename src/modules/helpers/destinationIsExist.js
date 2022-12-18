import fs from "fs";

export const destinationIsExist = async (pathString) => {
  // try {
  //   await fs.access(path);
  //   return true;
  // } catch (err) {
  //   return false;
  // }
  try {
    await fs.stat(pathString);
    return true;
  } catch (err) {
    return false;
  }
}

