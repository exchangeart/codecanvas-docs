---
sidebar_position: 2
---

# Capture Modes

When submitting generative art to Code Canvas, it is important to understand the different capture modes available.

This will help ensure that your artwork is captured correctly and appears as intended on the platform.

## Drawing on the Canvas

### Capturing a Specific Canvas

If your artwork is drawn directly on a canvas element, you should provide the canvas identifier in your submission.
This ensures that the correct element is captured and displayed on the platform.

For example, if your canvas element has an id of myCanvas, you would include the following in your submission:

```text
"captureMode": "canvas",
"canvasIdentifier": "myCanvas"
```

### Capturing the Viewport

If your artwork is not drawn on a canvas element, it will be captured from the entire viewport by default.

This means that the entire browser window will be captured and displayed on the platform.

```text
"captureMode": "viewport"
```

## Delay-Based Capture

If your artwork requires a delay between the moment rendering starts and the moment the asset should be captured,
you can use the delay-based capture mode.

For example, if your artwork requires a delay of 5 seconds before the capture, you would include the following in your submission: 

```json
"captureMode": "delayed",
"delayDuration": 5000 // in milliseconds
```

This delay gives your artwork time to fully render before being captured.

## Trigger-Based Capture

Trigger-based capture involves adding a specific code snippet to your project that captures the final artwork and any associated attributes. This method is typically used when the artwork generates dynamic or randomized content, and the artist wants to capture a specific output.

To use this method, you can add a console.log message in your code that outputs the artwork's attributes in a specific format:
```javascript
console.log("CODE_CANVAS_ATTRIBUTES_READY=", JSON.stringify(attributes));
```

Where attributes is an array of objects representing the attributes in the following format:

```[
  {
    "trait_type": "Background",
    "value": "Blue"
  },
  {
    "trait_type": "Night mode",
    "value": "ON"
  }
]
```

You can include any number of attributes in the array, as long as they follow this format. 
Ideally, you should provide us with a list of all the possible values for the `trait_type` and `value` properties so 
that we can experiment with them. Providing us with sample attributes would help us tremendously.

Once you've added the `console.log` message to your code, you can trigger the capture by opening the browser console 
and running the code that captures the artwork, as described in the previous section. 
The captured image and attributes will be saved to the captures directory in your project.


We hope this guide has been helpful in understanding the different capture modes available on Code Canvas.
If you have any questions or concerns, please don't hesitate to reach out.

