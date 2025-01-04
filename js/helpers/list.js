export function createUnorderedList(id = null, classList = []) {
  const list = document.createElement("ul");

  if (id) list.id = id;
  classList.forEach((className) => list.classList.add(className));

  return list;
}

export function createListItem(id = null, classList = []) {
  const listItem = document.createElement("li");

  if (id) listItem.id = id;
  classList.forEach((className) => listItem.classList.add(className));

  return listItem;
}
