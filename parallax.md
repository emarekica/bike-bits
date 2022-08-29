# Website with parallax effect

- [YT tutorial pt. 1](https://www.youtube.com/watch?v=Nt70Ld0dJCM&t=94s)

- [YT tutorial pt. 2](https://www.youtube.com/watch?v=0PaA82YzNOE&t=128s)

<br><br>

<hr />

## Steps

<br>

If the background image overflows under the black section you can add this line after the .to('.content'...) line. This changes the image height to the height of your screen, so it no more overflows and lets u scroll
<br>

    .to('.bg1', {height: '100vh'})

<br><br>

1.  Download from CDN. Paste into HTML.
    <br>

        <!-- animation -->
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"
          integrity="sha512-GQ5/eIhs41UXpG6fGo4xQBpwSEj9RrBvMuKyE2h/2vw3a9x85T1Bt0JglOUVJJLeyIUl/S/kCdDXlE/n7zCjIg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>

        <!-- scroll -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>

        <!-- combines first two -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js"></script>

    <br><br>

2.  Create HTML.
<br><br>
<hr />
<br>

**CSS**
<br>

3.  Put images on top of one another.
    <br>

         .container img {
         position: absolute;
         }

<br><br>

4.  Make img fill the screen.
    This combo will prevent the img to look squashed.
    <br>

            width: 100%;
            height: 100vh;
            object-fit: cover;

<br><br>

5.  Move the text to the middle of the screen (viewport).
    <br>

Use `transform: translate()` to put it perfectly in the middle.
<br>

          .main-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

<br><br>

6.  Add `z-index: -1` so the images are behind the text.
    <br>

**`z-index` determines the priority of elements showing on the screen.**

<br><br>

<hr />

**JS**
<br><br>

IMPLEMENTING SCROLL
<br>

7.  Create controller.
    <br>

         let controller = new ScrollMagic.Controller();

<br><br>

- [ScrollMagic CDN](https://cdnjs.com/libraries/ScrollMagic)
  <br>

- [ScrollMagic Docs](https://scrollmagic.io/docs/index.html)
  <br>

ScrollMagic is a jQuery plugin which essentially lets you use the scrollbar like a playback scrub control.

<br><br>

8. Add Timeline that chains multiple animations.
   <br>

```js
let timeline = new TimelineMax();

timeline
  .to(".text", 2, { x: 500 })
  .to(".content-images", 2, { opacity: 0 }, "-=2");
```

<br><br>

`.to( target:Object, duration:Number, vars:Object, position:* )`
<br>

- 1st parameter: element / object
- 2nd parameter: duration / num
- 3rd parameter: end value for properties
- 4th parameter: position

<br><br>

`"-=2"` makes sure it starts at the same time.

<br><br>

- [TimeLineMax Docs](https://greensock.com/docs/v2/TimelineMax)
- [TimeLineMax Docs to()](<https://greensock.com/docs/v2/TimelineMax/to()>)

<br><br>

**from-to animation**
<br>

`timeline.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });`

<br><br>

- [TimeLineMax Docs .fromTo()](<https://greensock.com/docs/v2/TimelineMax/fromTo()>)

<br><br>

**header animation**
<br>

```js
timeline
  .to(".rock", 3, { y: -600 })
  .to(".girl", 3, { y: -400 }, "-=3")
  .to(".bg1", 3, { y: 200 }, "-=3");
```

<br><br>

9. Scrolling
   <br>

Hook it up to scrolling by creating a [Scene](https://scrollmagic.io/docs/ScrollMagic.Scene.html).
<br>

Define parameters in the Scene and then hook up the animation with [setTween()](https://scrollmagic.io/docs/animation.GSAP.html).
<br>

```js
let scene = new ScrollMagic.Scene({
  // where to trigger animations
  triggerElement: "section",
  duration: "100%",

  // defines point of start of animation
  // 0 = start, 1 = end of the section
  triggerHook: 0,
})

  // hook the animation to te scene
  .setTween(timeline)

  // pin another section to the header
  .setPin("section")

  // hook it to the controller
  .addTo(controller);
```

<br><br>

10. Configure the second section overlaping so you don't see the bottom of the image of the header section.
    <br>

in CSS, set bottom section to `position: absolute`
<br>

in JS, move that section to the top `{top: "0%"}`
<br>

```js
timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .to(".bg1", 10, { y: 50 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10");
```

<br><br>

11. Fixin the white part at the top of the page.
    <br>

Add `fromTo()` in the animation. Push the starting position to -50 and than send it to 0. That will push the backgrount a little bit up.
<br>

```js
timeline
...
.fromTo(".bg1", 10, { y: 50 }, {y: 0}, "-=10");
...
```

<br><br>

The more animation you put, the faster they will go.
