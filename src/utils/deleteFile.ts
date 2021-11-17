import fs from 'fs'

export async function deleteFile(filePath: string) {
  try {
    await fs.promises.stat(filePath)
  } catch {
    return
  }

  await fs.promises.unlink(filePath)
}