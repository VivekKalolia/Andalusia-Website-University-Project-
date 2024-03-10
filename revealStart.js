// Reveal Effect right when the page is loaded (Effect without the scrolling)
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    reveals[i].classList.add("active");
  }
}

// Call reveal function directly when the script runs or after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", reveal);