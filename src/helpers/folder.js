import fs from 'fs'
import util from 'util'
import path from 'path'
import { createList, createListItem, createDocumentFragment, removeChilds } from './list.js'

const readdir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)

export const createFileItem = ({ name, stats } = {}, currentPath) => {
  let item = createListItem(name)
  item.path = path.join(currentPath, name)
  item.name = name
  item.stats = stats
  let fileStats = document.createElement('span')
    ;[stats.birthtime, stats.size].map(stat => {
      fileStats.appendChild(document.createTextNode(stat))
    })
  item.appendChild(fileStats)
  return item
}

export const renderFolder = (fileStats, parent, currentPath) => {
  if (!fileStats) {
    return
  }
  let fileElements = fileStats
    .map(fileStat => createFileItem(fileStat, currentPath))
  fileElements = createDocumentFragment(fileElements)
  let list = createList(fileElements, { id: 'app-file-list' })
  parent.appendChild(list)
}

export const updateFolderView = (currentPath, parent) => {
  removeChilds(parent)
  console.log(currentPath)
  let promise = readdir(currentPath)
    .then((fileNames) => {
      return Promise.all(fileNames.map(async (fileName) => {
        let stats = await stat(path.join(currentPath, fileName))
        return { name: fileName, stats }
      }))
    })
    .then((fileStats) => renderFolder(fileStats, parent, currentPath))
    .catch((error) => console.warn(error))
  return promise
}
