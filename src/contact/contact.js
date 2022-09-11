// module with innerHTML that opens when "about" clicked

"use strict";

const modal = document.getElementById("contact");

// selects wherever there is id="contact" in HTML
const openModal = document.querySelector(".contact");
const closeModal = document.querySelector(".exit");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// see for importing css through JS: https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
