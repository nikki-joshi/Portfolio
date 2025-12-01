// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Download as PDF (uses browser print to save)
function triggerDownload() {
  window.print();
}

document.getElementById('downloadBtn')?.addEventListener('click', triggerDownload);
document.getElementById('downloadBtnFooter')?.addEventListener('click', triggerDownload);