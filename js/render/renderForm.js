import * as resumeForm from "../components/resumeSections.js";

const FORM = document.querySelector("#resume-form");

export function renderForm(state) {
  for (const [section, section_state] of Object.entries(state)) {
    if (section_state.visible) {
      const sectionComponent = section_state.createComponent();
      FORM.appendChild(sectionComponent);
    }
  }
  FORM.appendChild(resumeForm.createButtonSection());
}
