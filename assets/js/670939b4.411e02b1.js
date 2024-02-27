"use strict";(self.webpackChunkcodecanvas_docs=self.webpackChunkcodecanvas_docs||[]).push([[368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Guides to Building",s={unversionedId:"sandbox/guides-to-building",id:"sandbox/guides-to-building",title:"Guides to Building",description:"In this tutorial, we'll discuss the structure of a project on Code Canvas and how to receive a seed.",source:"@site/docs/sandbox/guides-to-building.md",sourceDirName:"sandbox",slug:"/sandbox/guides-to-building",permalink:"/docs/sandbox/guides-to-building",draft:!1,editUrl:"https://github.com/exchangeart/codecanvas-docs/tree/main/docs/sandbox/guides-to-building.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Code Canvas Code of Conduct",permalink:"/docs/sandbox/code-of-conduct"},next:{title:"Where is the Art Stored?",permalink:"/docs/where-is-the-art-stored"}},c={},l=[{value:"Entry Point",id:"entry-point",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Structre of index.html",id:"structre-of-indexhtml",level:2},{value:"Receiving a Seed",id:"receiving-a-seed",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guides-to-building"},"Guides to Building"),(0,a.kt)("p",null,"In this tutorial, we'll discuss the structure of a project on Code Canvas and how to receive a seed."),(0,a.kt)("h2",{id:"entry-point"},"Entry Point"),(0,a.kt)("p",null,"When creating generative art on Code Canvas, it is important to structure your project in a specific way to ensure that\nit can be easily integrated into our platform."),(0,a.kt)("p",null,"Your project should have an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," entry point which takes a single URL parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"seed"),".\nThis parameter is a Solana public key that is base58-encoded.\nHere is an example of what the URL with a seed parameter should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// This code retrieves the seed parameter from the URL query string.\nhttps://your-project-url.com/?seed=6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd\n")),(0,a.kt)("p",null,"This code retrieves the seed parameter from the URL query string."),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The project structure for a Code Canvas project is relatively simple. At a minimum, your project should have an index.html file and a script.js file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"project-name/\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 script.js\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file is the entry point for your project and should contain the HTML markup for your artwork.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"script.js")," file should contain the JavaScript code that generates the artwork based on the seed parameter."),(0,a.kt)("h2",{id:"structre-of-indexhtml"},"Structre of index.html"),(0,a.kt)("p",null,"To ensure your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," is set up correctly, follow the provided example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\x3c!-- index.html --\x3e\n\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width">\n    <title>Your Project Name</title>\n    <link href="style.css" rel="stylesheet" type="text/css" />\n</head>\n\n<body>\n    \x3c!-- Include the p5.js library (replace \'p5.min.js\' with the actual path if necessary) --\x3e\n    <script src="p5.min.js"><\/script>\n    \x3c!-- Include the h264-mp4-encoder library (replace \'h264-mp4-encoder.web.js\' with the actual path if necessary) --\x3e\n    <script src="h264-mp4-encoder.web.js"><\/script>\n    \x3c!-- Include your custom JavaScript file --\x3e\n    <script src="script.js"><\/script>\n\n    \x3c!-- Hidden div to store the JavaScript source code for sharing --\x3e\n    <div id="src" class="hidden"></div>\n    \n    \x3c!-- Fetch and display the script.js code for sharing --\x3e\n    <script>fetch(\'script.js\').then(r=>r.text()).then(t=>document.querySelector(\'#src\').innerText=t)<\/script>\n\n    \x3c!-- Include other files if needed --\x3e\n    \x3c!-- Example: If you have a separate p5.js library file --\x3e\n    \x3c!-- <script src="path/to/your/separate/p5.min.js"><\/script> --\x3e\n</body>\n\n</html>\n\n')),(0,a.kt)("h2",{id:"receiving-a-seed"},"Receiving a Seed"),(0,a.kt)("p",null,"As a reminder, your project should have an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," entry-point which takes a single URL parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"seed"),",\nwhich is a Solana public key (e.g., 6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd)."),(0,a.kt)("p",null,"With this seed, you can generate your artwork using any programming language that can run in a web browser,\nsuch as JavaScript or WebGL."),(0,a.kt)("p",null,"You can use any method you like to convert the Solana public key string to a number that can be used as a seed value. "),(0,a.kt)("p",null,"One option is to use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/seedrandom"},"seedrandom library"),", which you will need to include in your ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let r = params.has("seed")\n        ? seedrandom(params.get("seed"), { state: true })\n        : seedrandom();\n')),(0,a.kt)("p",null,"The seed parameter in the URL is a base58-encoded Solana public key, like https://.....?seed=6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd."),(0,a.kt)("p",null,"You can use that, or feel free to come up with any esoteric way of converting a string in that format to a number.\nFor example, you could remove all letters from the string, keeping only the digits, and treat the resulting string as the seed value.\nAnother option is to replace all characters with their ASCII code and treat the resulting string as a number\n(e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ABCdef123")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"p"},"656667979899123"),")."),(0,a.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,a.kt)("p",null,"When creating your generative art project, it is important to minimize external dependencies.\nThis is because the ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file you submit to Code Canvas should contain everything needed to run your code,\neven if we have no internet access."),(0,a.kt)("p",null,"If possible, try to avoid any external dependencies.\nIf you must use them, make sure they are included in the ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file you submit to Code Canvas."),(0,a.kt)("p",null,"We hope this guide has been helpful in structuring your project and receiving a seed parameter.\nIf you have any questions or concerns, please don't hesitate to reach out."))}u.isMDXComponent=!0}}]);