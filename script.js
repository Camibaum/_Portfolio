const body = document.documentElement; // so we can toggle no-scroll on <html>
const panel = document.getElementById("infoPanel");
const openBtn = document.getElementById("infoToggle");
const closeBtn = document.getElementById("infoClose");

function openPanel() {
  panel.classList.add("is-open");
  openBtn.setAttribute("aria-expanded", "true");
  body.classList.add("no-scroll");
  // flyt fokus til panelet
  closeBtn.focus();
}

function closePanel() {
  panel.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", "false");
  body.classList.remove("no-scroll");
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
