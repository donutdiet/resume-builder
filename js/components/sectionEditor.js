import { createUnorderedList, createListItem } from "../helpers/list.js";
import { createInput, createButton } from "../helpers/input.js";
import { createParagraph } from "../helpers/text.js";

export function createSectionEditor(state) {
  const list = createUnorderedList();

  const personal = createListItem("personal");
  const personal_input = createInput("checkbox", null, null, [], {
    name: "personal",
    visible: state.personal.visible,
  });
  const personal_label = createParagraph("Personal");
  personal.appendChild(personal_input);
  personal.appendChild(personal_label);
  list.appendChild(personal);

  const education = createListItem("education");
  const education_input = createInput("checkbox", null, null, [], {
    name: "education",
    visible: state.education.visible,
  });
  const education_label = createParagraph("Education");
  education.appendChild(education_input);
  education.appendChild(education_label);
  list.appendChild(education);

  const experience = createListItem("experience");
  const experience_input = createInput("checkbox", null, null, [], {
    name: "experience",
    visible: state.experience.visible,
  });
  const experience_label = createParagraph("Experience");
  experience.appendChild(experience_input);
  experience.appendChild(experience_label);
  list.appendChild(experience);

  const projects = createListItem("projects");
  const projects_input = createInput("checkbox", null, null, [], {
    name: "projects",
    visible: state.projects.visible,
  });
  const projects_label = createParagraph("Projects");
  projects.appendChild(projects_input);
  projects.appendChild(projects_label);
  list.appendChild(projects);

  const skills = createListItem("skills");
  const skills_input = createInput("checkbox", null, null, [], {
    name: "skills",
    visible: state.skills.visible,
  });
  const skills_label = createParagraph("Skills");
  skills.appendChild(skills_input);
  skills.appendChild(skills_label);
  list.appendChild(skills);

  const saveBtn = createButton("button", "Save", "save-dialog-btn", [], {
    autofocus: true,
  });
  const cancelBtn = createButton("button", "Cancel", "close-dialog-btn");

  list.appendChild(saveBtn);
  list.appendChild(cancelBtn);

  return list;
}
