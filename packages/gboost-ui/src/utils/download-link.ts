export async function downloadLink(link: string, fileName: string) {
  const element = document.createElement("a");
  element.href = link;
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
}
