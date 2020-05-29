import fs from 'fs'
import util from 'util'
import { createList } from './list.js'

const readdir = util.promisify(fs.readdir)

export const renderFolder = (files, parent) => {
  if (!files) {
    return
  }
  let list = createList(files)
  parent.appendChild(list)
}

export const showFolder = (path, parent) => {
  readdir(path)
    .then((files) => {
      renderFolder(files, parent)
    })
    .catch((error) => console.warn(error))
}
