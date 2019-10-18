export const downloadFile = (filePath, fileName) => {
  var link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.click();
}

export const openLink = (link) => {
  window.open(link);
}