"use strict";


const init = function(){
    // Get the modal
var modal = document.getElementById("j-user-popup");

// Get the button that opens the modal
var btn = document.getElementById("btn-user-popup");
var btn2 = document.getElementById("btn-user-popup2");

// Get the <span> element that closes the modal, moet ng kruisje krijgen
var span = document.getElementsByClassName("c-user-popup__close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    console.log("klik button 1");
  }

btn2.onclick = function() {
  modal.style.display = "block";
  console.log("klik button hamburger");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
//lala
document.addEventListener("DOMContentLoaded",init);
