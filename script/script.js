let toggleMenu = document.getElementById("toggle-menu");
let toggleLinks = document.getElementById("toggle-links");
let buyTicket = document.getElementsByClassName("buy-ticket");
let ticketModal = document.getElementById("ticket-modal");
let closeTicket = document.getElementsByClassName("close-ticket");
let slideShow = document.getElementById("slide-show");
let slideLa = document.getElementById("slide-la");
let slideNy = document.getElementById("slide-ny");
let slideChicago = document.getElementById("slide-chicago");

// toggle links
toggleMenu.onclick = showHideLinks;
toggleLinks.onclick = showHideLinks;

// show ticket-modal
for(let i = 0; i < buyTicket.length; i++) {
  buyTicket[i].onclick = function() {
    showTicketModal();
  }
};

// close ticket-modal when click button Close, button X
for(let i = 0; i < closeTicket.length; i++) {
  closeTicket[i].onclick = function() {
    closeTicketModal();
  }
};

// close ticket-modal when click outside ticket-modal
window.onclick = function(event) {
  if (event.target == ticketModal) {
    ticketModal.style.display = "none";
  }
}

// show slide-show's content responding time

showSlideContent();



function showHideLinks() {
  let status = toggleLinks.style.display;
  if (status === "" || status === "none") {
    toggleLinks.style.display = "block";
  }
  else toggleLinks.style.display = "none";
}

function showTicketModal() {
  ticketModal.style.display = "block";
}

function closeTicketModal() {
  ticketModal.style.display = "none";
}

function showSlideContent() {
  slideLa.style.display = "block";
  slideNy.style.display = "none";
  slideChicago.style.display = "none";
  slideShow.style.backgroundPosition = "0 0";
  setTimeout(function() {
    slideLa.style.display = "none";
    slideNy.style.display = "block";
    slideChicago.style.display = "none";
    slideShow.style.backgroundPosition  = "50% 50%";
  }, 4000);
  setTimeout(function() {
    slideLa.style.display = "none";
    slideNy.style.display = "none";
    slideChicago.style.display = "block";
    slideShow.style.backgroundPosition  = "100% 100%";
  }, 8000);
  setTimeout(showSlideContent, 12000);
}