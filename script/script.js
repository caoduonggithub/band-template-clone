let toggleMenu = document.getElementById("toggle-menu");
let toggleLinks = document.getElementById("toggle-links");



toggleMenu.onclick = showHideLinks;
toggleLinks.onclick = showHideLinks;



function showHideLinks() {
  let status = toggleLinks.style.display;
  if (status === "" || status === "none") {
    toggleLinks.style.display = "block";
  }
  else toggleLinks.style.display = "none";
}