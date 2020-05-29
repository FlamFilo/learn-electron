import './stylesheets/main.css'
import './helpers/context_menu.js'
import './helpers/external_links.js'
import { updateFolderView } from './helpers/folder.js'

const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
let currentPath = homePath

const onListClick = (event) => {
  console.log('CLICK')
  let fileItem = event.target.parentNode
  console.warn(fileItem.name)
  let listContainer = document.getElementById('app-file-list-container')
  updateFolderView(fileItem.path, listContainer)
}

window.addEventListener('DOMContentLoaded', () => {
  let listContainer = document.getElementById('app-file-list-container')
  listContainer.addEventListener('click', onListClick)
  updateFolderView(currentPath, listContainer)
})

