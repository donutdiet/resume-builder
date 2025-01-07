import { renderForm } from "./renderForm.js";
import * as resumeForm from "../components/resumeSections.js";
import { renderSectionEditor } from "./renderSelectionEditor.js";

const STATE_COMPONENT_RENDERERS = {
  personal: resumeForm.createPersonalSection,
  education: resumeForm.createEducationSection,
  experience: resumeForm.createExperienceSection,
  projects: resumeForm.createProjectsSection,
  skills: resumeForm.createSkillsSection,
};

let state = {
  personal: {
    visible: true,
  },
  education: {
    visible: false,
  },
  experience: {
    visible: true,
  },
  projects: {
    visible: true,
  },
  skills: {
    visible: true,
  },
};

export function renderStateComponents() {
  renderForm(state, STATE_COMPONENT_RENDERERS);
  renderSectionEditor(state);
}

export function renderDialogState(newState = null) {
  renderSectionEditor(state);
}
