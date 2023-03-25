---
sidebar_position: 5
---

# Responsiveness

When creating generative art for Code Canvas, it is important to make sure that your artwork is responsive and looks
great on different types of screens. 

In this guide, we'll go over some tips and best practices for achieving a responsive design.

## Creating a Responsive Canvas with p5.js

If using the [p5.js library](https://p5js.org/), it is important to create a responsive canvas that adapts to the size
of the user's screen. By default, p5.js creates a canvas with a fixed size, which can cause your artwork to look 
distorted on different devices.

To create a responsive canvas, you can follow these steps:

1. In the `setup()` function, set the width and height to be the maximum you desire for your canvas and preserve the aspect ratio in relation to the window's width and height. Create the canvas with the new sizes.

```javascript
function setup() {
  const width = 1500;
  const height = 1500;

  const aspectRatio = width / height;
  console.log(width, height, aspectRatio);
  let newWidth = windowWidth;
  let newHeight = newWidth / aspectRatio;

  if (newHeight > windowHeight) {
    newHeight = windowHeight;
    newWidth = newHeight * aspectRatio;
  }

  canvas = createCanvas(newWidth, newHeight);
  noLoop();
  initInput();
}

```

2. Use the `windowResized()` function and the `resizeCanvas(width, height)` function to maintain the aspect-ratio 
when the window is resized.

```javascript
function windowResized() {
  const aspectRatio = canvas.width / canvas.height;
  let newWidth = windowWidth;
  let newHeight = newWidth / aspectRatio;

  if (newHeight > windowHeight) {
    newHeight = windowHeight;
    newWidth = newHeight * aspectRatio;
  }

  resizeCanvas(newWidth, newHeight);
}
```

3. In `index.html`, make sure your art is centered at all times. If you add your script directly inside the `<body>`, 
you can use this code to center it:

```javascript
<body style="display: flex; justify-content: center; align-items: center; background: transparent; height: 100vh; width: 100vw;">
  <script src="script.js"></script>
</body>

```

Please note that the above code examples are specific to p5.js only.

## Show a Loading Element

To provide a better experience while your art is rendering, please make sure you include this piece of code in your 
JavaScript file that is in charge of rendering the art:

```javascript
window.parent.postMessage("canvasReady", "*");
```

If your art starts rendering immediately after the document is loaded, then you should send a message to us at 
that point in time. If your art needs a couple of seconds to render, then you should send us the message then.

We hope this guide has been helpful in making your artwork responsive and providing a better user experience. 
If you have any questions or concerns, please don't hesitate to reach out.
