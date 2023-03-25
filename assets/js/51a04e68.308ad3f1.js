"use strict";(self.webpackChunkcodecanvas_docs=self.webpackChunkcodecanvas_docs||[]).push([[726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,v=d["".concat(c,".").concat(y)]||d[y]||u[y]||s;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:4},o="Reacting to Keypress Events",i={unversionedId:"artist/reacting-to-keypress-events",id:"artist/reacting-to-keypress-events",title:"Reacting to Keypress Events",description:"When creating generative art on Code Canvas, there are two hard requirements for any project:",source:"@site/docs/artist/reacting-to-keypress-events.md",sourceDirName:"artist",slug:"/artist/reacting-to-keypress-events",permalink:"/docs/artist/reacting-to-keypress-events",draft:!1,editUrl:"https://github.com/exchangeart/codecanvas-docs/tree/main/docs/artist/reacting-to-keypress-events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/artist/attributes"},next:{title:"Responsiveness",permalink:"/docs/artist/responsiveness"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reacting-to-keypress-events"},"Reacting to Keypress Events"),(0,a.kt)("p",null,"When creating generative art on Code Canvas, there are ",(0,a.kt)("strong",{parentName:"p"},"two hard requirements")," for any project: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"revealing the code when the user presses the ",(0,a.kt)("strong",{parentName:"li"},'"C"')," key"),(0,a.kt)("li",{parentName:"ul"},"saving a snapshot image when the user presses the ",(0,a.kt)("strong",{parentName:"li"},'"S"')," key ")),(0,a.kt)("p",null,'Optionally, the "',(0,a.kt)("strong",{parentName:"p"},"M"),'" keystroke can be used for any animated drops.'),(0,a.kt)("p",null,"To implement these keystroke events in your project, you can use the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\n  window.addEventListener("message", (event) => {\n    if (event.data.type === "cocaEvent") {\n      document.dispatchEvent(\n        new KeyboardEvent("keypress", {\n          key: event.data.key,\n          code: event.data.code,\n        })\n      );\n    }\n  });\n\n  document.addEventListener("keypress", function (e) {\n    if (e.key === "c" || e.key === "C") {\n      // reveal the code\n    } else if (e.key === "s" || e.key === "S") {\n      // save a snapshot image\n    } else if (e.key === "m" || e.key === "M") {\n      // animated drop functionality\n    }\n  });\n<\/script>\n\n')),(0,a.kt)("p",null,'This code listens for a message event and, when the event data type is "cocaEvent", it dispatches a new KeyboardEvent with the corresponding key and code properties. This simulates a keypress event for the specified key.'),(0,a.kt)("p",null,'The second part of the code listens for keypress events on the document object.\nIf the "C" or "c" key is pressed, the code for the artwork is revealed. If the "S" or "s" key is pressed, a snapshot image is saved.\nIf the "M" or "m" key is pressed, animated drop functionality can be triggered.'),(0,a.kt)("p",null,"By implementing these keystroke events, you can improve the user experience and make it easier for collectors to interact with your artwork on Code Canvas."))}u.isMDXComponent=!0}}]);