import './stylesheets/main.css'
import './helpers/context_menu.js'
import './helpers/external_links.js'
import { showFolder } from './helpers/folder.js'

const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

window.addEventListener('DOMContentLoaded', () => {
  let appElement = document.getElementById('app')
  showFolder(homePath, appElement)
})

