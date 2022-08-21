"use strict";

// --- BLOG THUMBNAILS

/* change the OPACITY and TXT on hover

EVENTS: mouseenter, mouseleave

1. add txt to img in blog thumbnail
2. when hovered: 
    - remove text
    - opacity: 0
    - transform: translateY(-2em);
    - transition: 0.7s;


ADDING STYLES: https://github.com/emarekica/DOM/blob/master/styles-attributes-classes.js

INSERT CONTENT: https://github.com/emarekica/DOM/blob/master/scd.js

EVENTS & HANDLERS: https://github.com/emarekica/DOM/blob/master/events-eventHandlers.js



EXAMPLE:

let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false


MDN EXAMPLE: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

*/

const thumbnail = document.querySelectorAll(".thumbnail");

thumbnail;

////////////////////////////////////////////////

// 1:
//  use selection of the existing images added by slider 1 - small imgs
// remove what is surplus

// 2:
// redirect it to the Slider 2 modal - big imgs logic
// adjust dot position (JS or CSS)

//

// --- PRE-MODAL

// // selecting DOM elements
// const modal = document.querySelector(".modal");
// const previews = document.querySelectorAll(".gallery img");
// const original = document.querySelector(".img-modal");
// const caption = document.querySelector(".caption");

// // looping over images to open them when click
// previews.forEach((preview) => {
//   // adding "click" event listener to all imgs
//   preview.addEventListener("click", () => {
//     modal.classList.add("open");

//     // opening animation
//     original.classList.add("open");

//     // dynamic img & txt
//     const originalSrc = preview.getAttribute("data-original");
//     // if you need to navigate to a folder with bigger imgs
//     // original.src = `./full/${originalSrc}`;
//     original.src = originalSrc;

//     const altTxt = preview.alt;
//     caption.textContent = altTxt;
//   });
// });

// // closing opened modal imgs
// // e = event
// modal.addEventListener("click", (e) => {
//   // check what you're clicking on (contains() returns boolean)
//   if (e.target.classList.contains("modal")) {
//     modal.classList.remove("open");
//     original.classList.remove("open");
//   }
// });

// //

// // --- Slider 2 MODAL - big imgs

// const slider = function () {
//   const slides = document.querySelectorAll(".slide");

//   const dotContainer = document.querySelector(".dots");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//       // width: 20em;
//       // margin: 1em 1em;
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();
