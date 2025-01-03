export function bindDialogEvents() {
  const dialog = document.querySelector("dialog");
  const showDialogBtn = document.querySelector("#dialog-toggle-btn");
  const closeDialogBtn = document.querySelector("#close-dialog-btn");

  showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}
