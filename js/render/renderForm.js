import * as resumeForm from "../components/resumeSections.js";

const FORM = document.querySelector("#resume-form");

export function renderForm() {
  const personalSection = resumeForm.createPersonalSection();
  const educationSection = resumeForm.createEducationSection();
  const experienceSection = resumeForm.createExperienceSection();
  const projectsSection = resumeForm.createProjectsSection();
  const skillsSection = resumeForm.createSkillsSection();
  const buttonSection = resumeForm.createButtonSection();

  FORM.appendChild(personalSection);
  FORM.appendChild(educationSection);
  FORM.appendChild(experienceSection);
  FORM.appendChild(projectsSection);
  FORM.appendChild(skillsSection);
  FORM.appendChild(buttonSection);
}
