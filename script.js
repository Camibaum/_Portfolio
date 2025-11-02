const body = document.documentElement; // toggle no-scroll on <html>
const panel = document.getElementById("infoPanel");
const openBtn = document.getElementById("infoToggle");
const closeBtn = document.getElementById("infoClose");

function openPanel() {
  panel.removeAttribute("hidden"); // <- vis panelet
  panel.classList.add("is-open");
  openBtn.setAttribute("aria-expanded", "true");
  body.classList.add("no-scroll");
  closeBtn.focus();
}

function closePanel() {
  panel.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", "false");
  body.classList.remove("no-scroll");
  panel.setAttribute("hidden", ""); // <- skjul panelet igen
  openBtn.focus();
}

openBtn.addEventListener("click", () => {
  const isOpen = panel.classList.contains("is-open");
  isOpen ? closePanel() : openPanel();
});
closeBtn.addEventListener("click", closePanel);

// ESC lukker
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && panel.classList.contains("is-open")) {
    closePanel();
  }
});
