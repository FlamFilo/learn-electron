/**
 * Module to create list
 * @module app.list
 */

/**
 * Transform dom array to documentFragment to group them
 * Permit to append multiple childs using Node.appendChild
 * @param {Node[]} childs elements to group up
 */
export const createDocumentFragment = (childs) => {
  let fragment = childs.reduce((fragment, child) => {
    fragment.appendChild(child)
    return fragment
  }, document.createDocumentFragment())
  return fragment
}

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
 * @param {String} content item content
 * @returns {Node} created item
 */
export const createListItem = (content = '') => {
  let item = document.createElement('li')
  item.classList.add('app-list-item')
  let button = document.createElement('button')
  button.innerText = content
  item.appendChild(button)
  return item
}

/**
 * Create a list of items
 * @param {Node} items
 * @returns {Node} created list
 */
export const createList = (items) => {
  let list = createListElement()
  list.appendChild(items)
  return list
}
