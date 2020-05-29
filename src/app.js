import './stylesheets/main.css'
import './helpers/context_menu.js'
import './helpers/external_links.js'
import { updateFolderView } from './helpers/folder.js'

const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
let currentPath = homePath

window.addEventListener('DOMContentLoaded', () => {
  let appElement = document.getElementById('app-content')
  updateFolderView(currentPath, appElement)
})

