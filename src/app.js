import { remote } from 'electron'
// import jetpack from 'fs-jetpack'

import './stylesheets/main.css'
import './helpers/context_menu.js'
import './helpers/external_links.js'
import { showFolder } from './helpers/folder.js'

// const app = remote.app
const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
// const appPath = app.getAppPath()
// const appDir = jetpack.cwd(appPath)
// const manifest = appDir.read('package.json', 'json')

window.addEventListener('DOMContentLoaded', () => {
  let appElement = document.getElementById('app')
  showFolder(homePath, appElement)
})

