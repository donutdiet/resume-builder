import { renderForm } from "./render/renderForm.js";
import { bindDialogEvents } from "./render/eventListeners.js";
import * as resumeForm from "./components/resumeSections.js";

let state = {
  personal: {
    visible: true,
    createComponent: resumeForm.createPersonalSection,
  },
  education: {
    visible: true,
    createComponent: resumeForm.createEducationSection,
  },
  experience: {
    visible: true,
    createComponent: resumeForm.createExperienceSection,
  },
  projects: {
    visible: true,
    createComponent: resumeForm.createProjectsSection,
  },
  skills: {
    visible: true,
    createComponent: resumeForm.createSkillsSection,
  },
};

function initialize() {
  renderForm(state);
  bindDialogEvents();
}

initialize();
