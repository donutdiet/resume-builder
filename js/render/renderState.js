import { renderForm } from "./renderForm.js";
import * as resumeForm from "../components/resumeSections.js";
import { renderSectionEditor } from "./renderSelectionEditor.js";

let state = {
  personal: {
    visible: true,
    createComponent: resumeForm.createPersonalSection,
  },
  education: {
    visible: false,
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

export function renderStateComponents() {
  renderForm(state);
  renderSectionEditor(state);
}
