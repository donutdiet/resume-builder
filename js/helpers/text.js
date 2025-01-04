export function createParagraph(textContent, id = null, classList = []) {
  const paragraph = document.createElement("p");
  paragraph.textContent = textContent;

  if (id) paragraph.id = id;
  classList.forEach((className) => paragraph.classList.add(className));

  return paragraph;
}
