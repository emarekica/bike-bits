"use strict";

// --- PARALLAX ("About" section)

// create contoller,
let controller = new ScrollMagic.Controller();

// for chaining multiple animations
let timeline = new TimelineMax();

// hooc animation to scrolling via scene
let scene = new ScrollMagic.Scene({
  // triggerElement: ".parallax-container",
  triggerElement: ".about",

  duration: "100%",
  triggerHook: 0,
});

//

// ANIMATION

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

//

// SCROLL

scene.setTween(timeline).setPin(".about").addTo(controller);
