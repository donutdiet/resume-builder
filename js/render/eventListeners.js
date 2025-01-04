import { renderStateComponents } from "./renderState.js";

export function bindDialogEvents() {
  const dialog = document.querySelector("dialog");
  const showDialogBtn = document.querySelector("#dialog-toggle-btn");
  const closeDialogBtn = document.querySelector("#close-dialog-btn");

  showDialogBtn.addEventListener("click", () => {
    renderStateComponents();
    dialog.showModal();
  });

  closeDialogBtn.addEventListener("click", () => {
    console.log("Trying to cancel");
    dialog.close();
  });

  dialog.addEventListener("click", (e) => {
    // Ensure it's a click on the backdrop, not on the content
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
