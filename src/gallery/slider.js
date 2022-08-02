"use strict";

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function () {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide();
    createDots();
    activateDot();
  };

  // --- EVENT HANDLERS

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", previousSlide);

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") previousSlide();
    event.key === "ArrowRight" && nextSlide(); // short-circuiting
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      currentSlide = e.target.dataset.slide;

      goToSlide(currentSlide);
      activateDot(currentSlide);
    }
  });
};

slider();

// /*

// <div class="slider">
//     <div class="slide slide--1"></div>
//     <div class="slide slide--2"></div>
//     <div class="slide slide--3"></div>
// </div>

// */
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");

//   // slide currently visible
//   let currentSlide = 0;

//   // max slide we can go
//   const maxSlide = slides.length;

//   // --- SLIDER

//   // wanted values: 0%, 100%, 200%, 300%
//   // calculate: 100% * current index

//   // Go to the next slide
//   const goToSlide = function () {
//     // currentSlige = 1, "translate" values: -100%, 0%, 100%, 200%
//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//     });
//   };

//   // right
//   const nextSlide = function () {
//     // stop when maxSlide reached right
//     if (currentSlide === maxSlide - 1) {
//       currentSlide = 0;
//     } else {
//       currentSlide++;
//     }

//     goToSlide(currentSlide);
//     activateDot(currentSlide);
//   };

//   // left
//   const previousSlide = function () {
//     if (currentSlide === 0) {
//       currentSlide = maxSlide - 1;
//     } else {
//       currentSlide--;
//     }

//     goToSlide(currentSlide);
//     activateDot(currentSlide);
//   };

//   const init = function () {
//     goToSlide();
//     createDots();
//     activateDot();
//   };

//   // ---- DOTS

//   const createDots = function () {
//     slides.forEach(function (_, index) {
//       // create HTML element
//       // "beforeend" = last child
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${index}"></button>`
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

//   // --- EVENT HANDLERS

//   // on buttons
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", previousSlide);

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") previousSlide();
//     event.key === "ArrowRight" && nextSlide(); // short-circuiting
//   });

//   // on dots
//   dotContainer.addEventListener("click", function (e) {
//     // match element we want
//     if (e.target.classList.contains("dots__dot")) {
//       // get the slide
//       currentSlide = e.target.dataset.slide;
//       //currentSlide = +e.target.dataset.slide;

//       // go to the selected slide
//       goToSlide(currentSlide);
//       activateDot(currentSlide);
//     }
//   });
// };

// slider();
