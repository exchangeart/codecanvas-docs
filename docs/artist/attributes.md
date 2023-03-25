---
sidebar_position: 3
---

# Attributes

In the world of generative art, attributes refer to the unique characteristics of an artwork that are programmatically generated using an algorithm. They can range from color schemes and patterns to more complex elements such as shape and form.

When creating an artwork for Code Canvas, it is important to consider including attributes that provide additional information and uniqueness to the artwork. These attributes can be captured and stored alongside the artwork on the blockchain.

One way to capture these attributes is through the trigger-based capture method. This method involves adding a console.log message to the JavaScript code that outputs the attributes in an array of objects format. The array should contain objects with "trait_type" and "value" properties.

Here's an example of how the attributes array could look like:

```javascript
const attributes = [
  {
    "trait_type": "Background",
    "value": "Blue"
  },
  {
    "trait_type": "Night mode",
    "value": "ON"
  }
];
```

To capture attributes, artists can use the trigger-based capture method by adding a console.log message with the 
attributes array to the code. This will output the attributes to the console, which can then be captured and stored
alongside the artwork.

It's important to note that providing sample attributes to Code Canvas can be immensely helpful in providing context
and understanding of the artwork. This information can be used to experiment with different values and traits to create
even more unique and interesting artworks.

In summary, including attributes in your Code Canvas artwork can add value and uniqueness to your artwork.
Using the trigger-based capture method to capture attributes can help store these attributes alongside the artwork on the blockchain. 
Providing sample attributes can help provide context and understanding to the artwork,
leading to more experimentation and unique creations.
