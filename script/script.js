let toggleMenu = document.getElementById("toggle-menu");
let toggleLinks = document.getElementById("toggle-links");
let buyTicket = document.getElementsByClassName("buy-ticket");
let ticketModal = document.getElementById("ticket-modal");
let closeTicket = document.getElementsByClassName("close-ticket");



toggleMenu.onclick = showHideLinks;
toggleLinks.onclick = showHideLinks;
for(let i = 0; i < buyTicket.length; i++) {
	buyTicket[i].onclick = function() {
		showTicketModal();
	}
};
for(let i = 0; i < closeTicket.length; i++) {
	closeTicket[i].onclick = function() {
		closeTicketModal();
	}
};
window.onclick = function(event) {
  if (event.target == ticketModal) {
    ticketModal.style.display = "none";
  }
}



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

