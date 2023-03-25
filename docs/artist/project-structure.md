---
sidebar_position: 1
---

# Project Structure

In this tutorial, we'll discuss the structure of a project on Code Canvas and how to receive a seed.

## Entry Point

When creating generative art on Code Canvas, it is important to structure your project in a specific way to ensure that 
it can be easily integrated into our platform.

Your project should have an `index.html` entry point which takes a single URL parameter called `seed`. 
This parameter is a Solana public key that is base58-encoded. 
Here is an example of what the URL with a seed parameter should look like:


```javascript
// This code retrieves the seed parameter from the URL query string.
https://your-project-url.com/?seed=6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd
```

This code retrieves the seed parameter from the URL query string.

## Project Structure

The project structure for a Code Canvas project is relatively simple. At a minimum, your project should have an index.html file and a script.js file.

```text
project-name/
├── index.html
└── script.js
```

The `index.html` file is the entry point for your project and should contain the HTML markup for your artwork. 
The `script.js` file should contain the JavaScript code that generates the artwork based on the seed parameter.


## Receiving a Seed

As a reminder, your project should have an `index.html` entry-point which takes a single URL parameter called `seed`, 
which is a Solana public key (e.g., 6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd).

With this seed, you can generate your artwork using any programming language that can run in a web browser,
such as JavaScript or WebGL.

You can use any method you like to convert the Solana public key string to a number that can be used as a seed value. 

One option is to use the [seedrandom library](https://www.npmjs.com/package/seedrandom), which you will need to include in your `.zip` file.

```javascript
let r = params.has("seed")
        ? seedrandom(params.get("seed"), { state: true })
        : seedrandom();
```

The seed parameter in the URL is a base58-encoded Solana public key, like https://.....?seed=6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd.

You can use that, or feel free to come up with any esoteric way of converting a string in that format to a number. 
For example, you could remove all letters from the string, keeping only the digits, and treat the resulting string as the seed value. 
Another option is to replace all characters with their ASCII code and treat the resulting string as a number 
(e.g., `ABCdef123` --> `656667979899123`).

## External dependencies

When creating your generative art project, it is important to minimize external dependencies. 
This is because the `.zip` file you submit to Code Canvas should contain everything needed to run your code,
even if we have no internet access.

If possible, try to avoid any external dependencies. 
If you must use them, make sure they are included in the `.zip` file you submit to Code Canvas.


We hope this guide has been helpful in structuring your project and receiving a seed parameter. 
If you have any questions or concerns, please don't hesitate to reach out.
