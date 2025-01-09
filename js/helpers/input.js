const SPECIAL_ATTRIBUTES = new Set(["checked", "disabled"]);

// The presence of bpecial boolean attributes implies `true`
// Example: <input checked="false"> may still be checked
// Solution: value=false --> remove attribute
function handleSpecialAttributes(input, key, value) {
  if (value) {
    input.setAttribute(key, "");
  } else {
    input.removeAttribute(key);
  }
}

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
    if (SPECIAL_ATTRIBUTES.has(key)) {
      handleSpecialAttributes(input, key, !!attributes[key]);
    } else {
      input.setAttribute(key, attributes[key]);
    }
  }

  return input;
}

export function createButton(
  type,
  text,
  id = null,
  classList = [],
  attributes = {}
) {
  const button = document.createElement("button");
  button.type = type;
  button.textContent = text;

  if (id) button.id = id;
  classList.forEach((className) => button.classList.add(className));

  for (let key in attributes) {
    button.setAttribute(key, attributes[key]);
  }

  return button;
}
