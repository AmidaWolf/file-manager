import path from "path";

export const checkAbsolutePathAndRefactorIt = (filePath, newFilePath = null) => {
  if (newFilePath) {
    let joinedFilePath = path.join(process.cwd(), filePath)
    if (path.isAbsolute(filePath)) {
      joinedFilePath = path.normalize(filePath)
    }

    let joinedNewFilePath = path.join(process.cwd(), newFilePath)
    if (path.isAbsolute(newFilePath)) {
      joinedNewFilePath = path.normalize(newFilePath)
    }

    return [joinedFilePath, joinedNewFilePath]
  } else {
    let joinedFilePath = path.join(process.cwd(), filePath)
    if (path.isAbsolute(filePath)) {
      joinedFilePath = path.normalize(filePath)
    }

    return joinedFilePath
  }
}