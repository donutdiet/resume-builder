import { renderStateComponents } from "./renderState.js";

// Elements that will always persist in the DOM
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("#dialog-toggle-btn");

export function bindHeaderEvents() {
  showDialogBtn.addEventListener("click", () => {
    // re-render section editor dialog to match state (idk yet if necessary)
    renderStateComponents();
    // re-bind dialog events since DOM elements were re-rendered
    bindDialogEvents();
    dialog.showModal();
  });
}

export function bindDialogEvents() {
  const closeDialogBtn = document.querySelector("#close-dialog-btn");

  // Section editor cancel button event
  closeDialogBtn.addEventListener("click", (e) => {
    dialog.close();
  });

  // Section editor cancel when clicking outside of dialog event
  dialog.addEventListener("click", (e) => {
    // Ensure it's a click on the backdrop and close the dialog if so
    const rect = dialog.getBoundingClientRect();
    const isInDialogContent =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInDialogContent) {
      dialog.close();
    }
  });
}
