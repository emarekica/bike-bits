"use strict";

// --- PARALLAX ("About" section)

// create contoller,
let controller = new ScrollMagic.Controller();

// for chaining multiple animations
let timeline = new TimelineMax();

const headerTimeline = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

// hook animation to scrolling via scene
let scene = new ScrollMagic.Scene({
  // triggerElement: ".parallax-container",
  triggerElement: ".about",

  duration: "100%",
  triggerHook: 0,
});

//

// ANIMATION

// --- header

headerTimeline.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 8 });

headerTimeline
  .fromTo(".box-left", { x: "-100%" }, { x: "0%", duration: 5 }, "-=8")
  .fromTo(".box-right", { x: "100%" }, { x: "0%", duration: 5 }, "-=8");

//

// --- parallax

timeline
  .fromTo("#girl", 7, { y: 30, objectFit: "cover" }, { y: 0, duration: 7 })
  .fromTo(
    "#hill",
    7,
    { y: -40, objectFit: "cover" },
    { y: 0, duration: 7 },
    "-=7"
  )
  .to(".parallax-overlap", 7, { bottom: "0%" }, "-=7");

// scroll
scene.setTween(timeline).setPin(".about").addTo(controller);

//

// CONTACT MODAL

const modal = document.querySelector(".modal-container");
const homePage = document.querySelectorAll(".home");
const body = document.getElementsByTagName("body")[0];

// const openModal = document.getElementsByClassName("contact");
// console.log(openModal);
const closeModal = document.querySelector(".exit");

Array.from(document.getElementsByClassName("contact")).forEach(function (item) {
  item.addEventListener("click", () => {
    homePage.forEach((element) => {
      element.classList.add("close");
    });

    modal.classList.add("open");
    body.style.maxHeight = "100vh";
  });
});

// why to use this: https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");

  homePage.forEach((element) => {
    element.classList.remove("close");
  });
});

// modal.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal")) {
//     homePage.classList.remove("close");
//     modal.classList.remove("open");
//   }
// });

// make modal close by clicking on other parts of the page than the "x"

// display: none; <> display: block;
// add click listener on a backdrop to close everything when backdrop clicked

// modal.style.display: "block";
// backdrop.style.display: "block";
