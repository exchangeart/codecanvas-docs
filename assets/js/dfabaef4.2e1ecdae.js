"use strict";(self.webpackChunkcodecanvas_docs=self.webpackChunkcodecanvas_docs||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,v=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(v,s(s({ref:t},l),{},{components:n})):a.createElement(v,s({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5},s="Responsiveness",o={unversionedId:"artist/responsiveness",id:"artist/responsiveness",title:"Responsiveness",description:"When creating generative art for Code Canvas, it is important to make sure that your artwork is responsive and looks",source:"@site/docs/artist/responsiveness.md",sourceDirName:"artist",slug:"/artist/responsiveness",permalink:"/docs/artist/responsiveness",draft:!1,editUrl:"https://github.com/exchangeart/codecanvas-docs/tree/main/docs/artist/responsiveness.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Reacting to Keypress Events",permalink:"/docs/artist/reacting-to-keypress-events"},next:{title:"Submission",permalink:"/docs/artist/submission"}},c={},p=[{value:"Creating a Responsive Canvas with p5.js",id:"creating-a-responsive-canvas-with-p5js",level:2},{value:"Show a Loading Element",id:"show-a-loading-element",level:2}],l={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"responsiveness"},"Responsiveness"),(0,i.kt)("p",null,"When creating generative art for Code Canvas, it is important to make sure that your artwork is responsive and looks\ngreat on different types of screens. "),(0,i.kt)("p",null,"In this guide, we'll go over some tips and best practices for achieving a responsive design."),(0,i.kt)("h2",{id:"creating-a-responsive-canvas-with-p5js"},"Creating a Responsive Canvas with p5.js"),(0,i.kt)("p",null,"If using the ",(0,i.kt)("a",{parentName:"p",href:"https://p5js.org/"},"p5.js library"),", it is important to create a responsive canvas that adapts to the size\nof the user's screen. By default, p5.js creates a canvas with a fixed size, which can cause your artwork to look\ndistorted on different devices."),(0,i.kt)("p",null,"To create a responsive canvas, you can follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"setup()")," function, set the width and height to be the maximum you desire for your canvas and preserve the aspect ratio in relation to the window's width and height. Create the canvas with the new sizes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function setup() {\n  const width = 1500;\n  const height = 1500;\n\n  const aspectRatio = width / height;\n  console.log(width, height, aspectRatio);\n  let newWidth = windowWidth;\n  let newHeight = newWidth / aspectRatio;\n\n  if (newHeight > windowHeight) {\n    newHeight = windowHeight;\n    newWidth = newHeight * aspectRatio;\n  }\n\n  canvas = createCanvas(newWidth, newHeight);\n  noLoop();\n  initInput();\n}\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"windowResized()")," function and the ",(0,i.kt)("inlineCode",{parentName:"li"},"resizeCanvas(width, height)")," function to maintain the aspect-ratio\nwhen the window is resized.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function windowResized() {\n  const aspectRatio = canvas.width / canvas.height;\n  let newWidth = windowWidth;\n  let newHeight = newWidth / aspectRatio;\n\n  if (newHeight > windowHeight) {\n    newHeight = windowHeight;\n    newWidth = newHeight * aspectRatio;\n  }\n\n  resizeCanvas(newWidth, newHeight);\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html"),", make sure your art is centered at all times. If you add your script directly inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"<body>"),",\nyou can use this code to center it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<body style="display: flex; justify-content: center; align-items: center; background: transparent; height: 100vh; width: 100vw;">\n  <script src="script.js"><\/script>\n</body>\n\n')),(0,i.kt)("p",null,"Please note that the above code examples are specific to p5.js only."),(0,i.kt)("h2",{id:"show-a-loading-element"},"Show a Loading Element"),(0,i.kt)("p",null,"To provide a better experience while your art is rendering, please make sure you include this piece of code in your\nJavaScript file that is in charge of rendering the art:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.parent.postMessage("canvasReady", "*");\n')),(0,i.kt)("p",null,"If your art starts rendering immediately after the document is loaded, then you should send a message to us at\nthat point in time. If your art needs a couple of seconds to render, then you should send us the message then."),(0,i.kt)("p",null,"We hope this guide has been helpful in making your artwork responsive and providing a better user experience.\nIf you have any questions or concerns, please don't hesitate to reach out."))}h.isMDXComponent=!0}}]);