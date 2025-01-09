import { renderStateComponents } from "./renderers/renderState.js";
import { bindHeaderEvents } from "./renderers/eventListeners.js";

function initialize() {
  renderStateComponents();
  bindHeaderEvents();
}

initialize();
