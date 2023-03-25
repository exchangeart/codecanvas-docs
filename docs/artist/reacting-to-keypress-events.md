---
sidebar_position: 4
---

# Reacting to Keypress Events

When creating generative art on Code Canvas, there are **two hard requirements** for any project: 
- revealing the code when the user presses the **"C"** key
- saving a snapshot image when the user presses the **"S"** key 
 
Optionally, the "**M**" keystroke can be used for any animated drops.

To implement these keystroke events in your project, you can use the following code snippet:

```javascript
<script>
  window.addEventListener("message", (event) => {
    if (event.data.type === "cocaEvent") {
      document.dispatchEvent(
        new KeyboardEvent("keypress", {
          key: event.data.key,
          code: event.data.code,
        })
      );
    }
  });

  document.addEventListener("keypress", function (e) {
    if (e.key === "c" || e.key === "C") {
      // reveal the code
    } else if (e.key === "s" || e.key === "S") {
      // save a snapshot image
    } else if (e.key === "m" || e.key === "M") {
      // animated drop functionality
    }
  });
</script>

```

This code listens for a message event and, when the event data type is "cocaEvent", it dispatches a new KeyboardEvent with the corresponding key and code properties. This simulates a keypress event for the specified key.

The second part of the code listens for keypress events on the document object. 
If the "C" or "c" key is pressed, the code for the artwork is revealed. If the "S" or "s" key is pressed, a snapshot image is saved.
If the "M" or "m" key is pressed, animated drop functionality can be triggered.

By implementing these keystroke events, you can improve the user experience and make it easier for collectors to interact with your artwork on Code Canvas.
