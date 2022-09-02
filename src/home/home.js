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
