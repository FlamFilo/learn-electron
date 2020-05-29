/**
 * Helper for opening links in external browser, not in the app.
 * Useful especially if you have a lot of links to deal with.
 * Every link with class ".js-external-link" will be opened in external browser.
 *
 * Usage
 *   "A" tag with with class ".js-external-link"
 * @example
 *   <a class="js-external-link" href="http://google.com">google</a>
 *   <p class="js-external-link">
 *     <a href="http://google.com">google</a>
 *     <a href="http://bing.com">bing</a>
 *   </p>
 */
import { shell } from 'electron'

const supportExternalLinks = (event) => {
  let href
  let isExternal = false

  const checkDomElement = (element) => {
    if (element.nodeName === 'A') {
      href = element.getAttribute('href')
    }
    if (element.classList.contains('js-external-link')) {
      isExternal = true
    }
    if (href && isExternal) {
      shell.openExternal(href)
      event.preventDefault()
    } else if (element.parentElement) {
      checkDomElement(element.parentElement)
    }
  }

  checkDomElement(event.target)
};

document.addEventListener('click', supportExternalLinks, false)
