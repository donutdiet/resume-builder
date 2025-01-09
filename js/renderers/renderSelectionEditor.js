import { createSectionEditor } from "../components/sectionEditor.js";

const DIALOG = document.querySelector("dialog");

export function renderSectionEditor(state) {
  DIALOG.innerHTML = "";
  DIALOG.appendChild(createSectionEditor(state));
}
