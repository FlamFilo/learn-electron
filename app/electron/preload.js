// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const fs = require('fs')
const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

const showFolder = (path) => {
  const folder = fs.readdirSync(path)
  console.log(folder)
}

const replaceText = (selector, text) => {
  const element = document.getElementById(selector)
  if (element) element.innerText = text
}

const replaceTuto = () => {
  const tutoTypes = ['chrome', 'node', 'electron']
  for (const type of tutoTypes) {
    replaceText(`${type}-version`, process.versions[type])
  }
}

window.addEventListener('DOMContentLoaded', () => {
  replaceTuto()
  showFolder(homePath)
})
