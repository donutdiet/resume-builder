import { renderDialogState, renderStateComponents } from "./renderState.js";

// Elements that will always persist in the DOM
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("#dialog-toggle-btn");

export function bindHeaderEvents() {
  showDialogBtn.addEventListener("click", () => {
    // re-bind dialog events since DOM elements were re-rendered
    bindDialogEvents();
    dialog.showModal();
  });
}

export function bindDialogEvents() {
  const saveDialogBtn = document.querySelector("#save-dialog-btn");
  const closeDialogBtn = document.querySelector("#close-dialog-btn");

  saveDialogBtn.addEventListener("click", (e) => {});

  // Section editor cancel button event
  closeDialogBtn.addEventListener("click", (e) => {
    dialog.close();
    // cancel potential changes and re-render section editor to previous state
    renderDialogState();
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
      // cancel potential changes and re-render section editor to previous state
      renderDialogState();
    }
  });
}
