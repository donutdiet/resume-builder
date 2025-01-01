export function createInput(
  type,
  placeholder = null,
  id = null,
  classList = [],
  attributes = {}
) {
  const input = document.createElement("input");
  input.type = type;
  if (placeholder) input.placeholder = placeholder;

  if (id) input.id = id;
  classList.forEach((className) => input.classList.add(className));

  for (let key in attributes) {
    input.setAttribute(key, attributes[key]);
  }

  return input;
}

export function createButton(type, text, id = null, classList = []) {
  const button = document.createElement("button");
  button.type = type;
  button.textContent = text;

  if (id) button.id = id;
  classList.forEach((className) => button.classList.add(className));

  return button;
}
