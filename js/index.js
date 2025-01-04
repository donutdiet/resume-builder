import { renderStateComponents } from "./render/renderState.js";
import { bindDialogEvents } from "./render/eventListeners.js";

function initialize() {
  renderStateComponents();
  bindDialogEvents();
}

initialize();
