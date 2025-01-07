import { renderStateComponents } from "./render/renderState.js";
import { bindHeaderEvents } from "./render/eventListeners.js";

function initialize() {
  renderStateComponents();
  bindHeaderEvents();
}

initialize();
