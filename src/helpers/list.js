/**
 * Module to create list
 * @module app.list
 */

/**
 * Create list element
 * @returns {Node} create list
 */
export const createListElement = () => {
  let list = document.createElement('ul')
  list.classList.add('app-list')
  return list
}

/**
 * Create a item to add in a list
 * @param {Node|String} content item content
 * @returns {Node} created item
 */
export const createListItem = (content) => {
  let item = document.createElement('li')
  item.classList.add('app-list-item')
  if (typeof content === 'string') {
    item.innerText = content
  } else if (content instanceof Node) {
    item.appendChild(content)
  }
  return item
}

/**
 * Create items to add in a list
 * @param {Node|String} contents item contents
 * @returns {DocumentFragment} create items
 */
export const createListItems = (contents) => {
  let items = contents.reduce((fragment, content) => {
    let item = createListItem(content)
    fragment.appendChild(item)
    return fragment
  }, document.createDocumentFragment())
  return items
}

/**
 * Create a list of items
 * @param {Node|string} contents item contents
 * @returns {Node} created list
 */
export const createList = (contents) => {
  let list = createListElement()
  let items = createListItems(contents)
  list.appendChild(items)
  return list
}
