export function createUnorderedList(
  id = null,
  classList = [],
  attributes = {}
) {
  const list = document.createElement("ul");

  if (id) list.id = id;
  classList.forEach((className) => list.classList.add(className));

  // Can refactor into a separate helper function later to handle special boolean attributes
  for (let key in attributes) {
    list.setAttribute(key, attributes[key]);
  }

  return list;
}

export function createListItem(id = null, classList = [], attributes = {}) {
  const listItem = document.createElement("li");

  if (id) listItem.id = id;
  classList.forEach((className) => listItem.classList.add(className));

  for (let key in attributes) {
    listItem.setAttribute(key, attributes[key]);
  }

  return listItem;
}
