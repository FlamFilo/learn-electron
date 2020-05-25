// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const fs = require('fs')
const util = require('util')
const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

const readdir = util.promisify(fs.readdir)

// module list BEGIN //
const createListElement = () => {
  let list = document.createElement('ul')
  list.classList.add('app-list')
  return list
}
const createListItem = (text) => {
  let item = document.createElement('li')
  item.classList.add('app-list-item')
  item.innerText = text
  return item
}
const createListItems = (textes) => {
  let items = textes.reduce((fragment, text) => {
    let item = createListItem(text)
    fragment.appendChild(item)
    return fragment
  }, document.createDocumentFragment())
  return items
}
const createList = (textes) => {
  let list = createListElement()
  let items = createListItems(textes)
  list.appendChild(items)
  return list
}
// module list END //

const renderFolder = (files) => {
  if (!files) {
    return
  }
  const domParent = document.getElementById('content')
  const list = createList(files)
  domParent.appendChild(list)
}

const showFolder = (path) => {
  readdir(path)
    .then((files) => {
      renderFolder(files)
    })
    .catch((error) => console.warn(error))
}

window.addEventListener('DOMContentLoaded', () => {
  showFolder(homePath)
})
