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
    visible: true,
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

export function renderStateComponents(newState = null) {
  if (newState) {
    // Update the state with properties from newState
    for (const section in newState) {
      // Unspecified attributes will remain the same
      state[section] = {
        ...state[section],
        ...newState[section],
      };
    }
  }
  renderForm(state, STATE_COMPONENT_RENDERERS);
  renderSectionEditor(state);
  console.log(state);
}

export function renderDialogState() {
  renderSectionEditor(state);
}
