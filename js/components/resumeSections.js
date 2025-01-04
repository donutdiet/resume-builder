import { createInput, createButton } from "../helpers/input.js";
import { createParagraph } from "../helpers/text.js";

export function createPersonalSection() {
  const section = document.createElement("section");
  const label = createParagraph("Personal");

  const nameInput = createInput("text", "Full Name", "name");
  const phoneNumberInput = createInput("tel", "Phone Number", "phone");
  const emailInput = createInput("email", "Email", "email");
  const locationInput = createInput("text", "Location", "location");
  const linkInput = createInput("url", "Link", null, ["link"]);

  const addLinkBtn = createButton("button", "Add Link", "add-link-btn");

  section.appendChild(label);
  section.appendChild(nameInput);
  section.appendChild(phoneNumberInput);
  section.appendChild(emailInput);
  section.appendChild(locationInput);
  section.appendChild(linkInput);
  section.appendChild(addLinkBtn);

  return section;
}

export function createEducationSection() {
  const section = document.createElement("section");
  const label = createParagraph("Education");

  const schoolInput = createInput("text", "School", "school");
  const degreeInput = createInput("text", "Degree", "degree");
  const graduationInput = createInput("month", null, "graduation");
  const gpaInput = createInput("number", "GPA", "gpa", [], { step: "0.01" });

  const addEducationBtn = createButton(
    "button",
    "Add Education",
    "add-education-btn"
  );

  section.appendChild(label);
  section.appendChild(schoolInput);
  section.appendChild(degreeInput);
  section.appendChild(graduationInput);
  section.appendChild(gpaInput);
  section.appendChild(addEducationBtn);

  return section;
}

export function createExperienceSection() {
  const section = document.createElement("section");
  const label = createParagraph("Experience");

  const jobTitleInput = createInput("text", "Job Title", null, ["job-title"]);
  const companyInput = createInput("text", "Company Name", null, ["company"]);
  const startDateInput = createInput("month", null, null, ["start-date"]);
  const endDateInput = createInput("month", null, null, ["end-date"]);
  const description = document.createElement("textarea");
  description.classList.add("description");
  description.placeholder = "Description";

  const addExperienceBtn = createButton(
    "button",
    "Add Experience",
    "add-expereince-btn"
  );

  section.appendChild(label);
  section.appendChild(jobTitleInput);
  section.appendChild(companyInput);
  section.appendChild(startDateInput);
  section.appendChild(endDateInput);
  section.appendChild(description);
  section.appendChild(addExperienceBtn);

  return section;
}

export function createProjectsSection() {
  const section = document.createElement("section");
  const label = createParagraph("Projects");

  const projectInput = createInput("text", "Project Name", null, ["project"]);
  const techInput = createInput("text", "Technologies Used", null, ["tech"]);
  const description = document.createElement("textarea");
  description.classList.add("description");
  description.placeholder = "Description";

  const addProjectBtn = createButton(
    "button",
    "Add Project",
    "add-project-btn"
  );

  section.appendChild(label);
  section.appendChild(projectInput);
  section.appendChild(techInput);
  section.appendChild(description);
  section.appendChild(addProjectBtn);

  return section;
}

export function createSkillsSection() {
  const section = document.createElement("section");
  const label = createParagraph("Technical Skills");

  const languagesInput = createInput("text", "Languages", "languages");
  const libInput = createInput("text", "Libraries/Frameworks", "libs-fwks");
  const toolsInput = createInput("text", "Developer Tools", "dev-tools");

  section.appendChild(label);
  section.appendChild(languagesInput);
  section.appendChild(libInput);
  section.appendChild(toolsInput);

  return section;
}

export function createButtonSection() {
  const section = document.createElement("section");

  const generateBtn = createButton("submit", "Generate", "generate-btn");
  const clearBtn = createButton("clear", "Clear", "clear-btn");

  section.appendChild(generateBtn);
  section.appendChild(clearBtn);

  return section;
}
