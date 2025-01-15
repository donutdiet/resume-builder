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
  const container = document.querySelector("ul");
  const draggables = document.querySelectorAll(".draggable");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const dragging = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(dragging);
    } else {
      container.insertBefore(dragging, afterElement);
    }
  });

  saveDialogBtn.addEventListener("click", () => {
    const checkboxes = dialog.querySelectorAll("input[type=checkbox]");
    const newState = {};

    checkboxes.forEach((checkbox) => {
      newState[checkbox.name] = {};
      newState[checkbox.name].visible = checkbox.checked;
    });

    for (const key in newState) {
      console.log(`${key}: ${newState[key].visible}`);
    }
    renderStateComponents(newState);
    dialog.close();
  });

  // Section editor cancel button event
  closeDialogBtn.addEventListener("click", () => {
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

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
