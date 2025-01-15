import { createUnorderedList, createListItem } from "../helpers/list.js";
import { createInput, createButton } from "../helpers/input.js";
import { createParagraph } from "../helpers/text.js";

export function createSectionEditor(state) {
  const list = createUnorderedList();

  for (const section in state) {
    const listItem = createListItem(section, ["draggable"], {
      draggable: true,
    });

    const checkbox = createInput("checkbox", null, null, [], {
      name: section,
      checked: state[section].visible,
    });
    const label = createParagraph(
      section.charAt(0).toUpperCase() + section.slice(1)
    );
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    list.appendChild(listItem);
  }

  return list;
}

export function createButtonSection() {
  const div = document.createElement("div");
  div.classList.add("btn-section");

  const saveBtn = createButton("button", "Save", "save-dialog-btn", [], {
    autofocus: true,
  });
  const cancelBtn = createButton("button", "Cancel", "close-dialog-btn");

  div.appendChild(saveBtn);
  div.appendChild(cancelBtn);

  return div;
}
