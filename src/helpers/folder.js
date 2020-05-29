import fs from 'fs'
import util from 'util'
import path from 'path'
import { createList, createListItem, createDocumentFragment } from './list.js'

const readdir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)

export const createFileItem = ({ name, stats } = {}) => {
  let item = createListItem(name)
  let fileStats = document.createElement('span')
    ;[stats.birthtime, stats.size].map(stat => {
      fileStats.appendChild(document.createTextNode(stat))
    })
  item.appendChild(fileStats)
  return item
}

export const renderFolder = (fileStats, parent) => {
  if (!fileStats) {
    return
  }
  let fileElements = fileStats
    .map(createFileItem)
  fileElements = createDocumentFragment(fileElements)
  let list = createList(fileElements)
  parent.appendChild(list)
}

export const updateFolderView = (currentPath, parent) => {
  console.log(currentPath)
  readdir(currentPath)
    .then((fileNames) => {
      return Promise.all(fileNames.map(async (fileName) => {
        let stats = await stat(path.join(currentPath, fileName))
        return { name: fileName, stats }
      }))
    })
    .then((fileStats) => renderFolder(fileStats, parent))
    .catch((error) => console.warn(error))
}
