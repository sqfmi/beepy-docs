"use strict";(self.webpackChunkbeepberry=self.webpackChunkbeepberry||[]).push([[434],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(b,a(a({ref:r},p),{},{components:t})):n.createElement(b,a({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3},a="RGB LED",c={unversionedId:"firmware/rgb-led",id:"firmware/rgb-led",title:"RGB LED",description:"The RGB LED is connected to the RP2040, and can be controlled by the Pi via i2c by writing to specific registers.",source:"@site/docs/firmware/rgb-led.md",sourceDirName:"firmware",slug:"/firmware/rgb-led",permalink:"/docs/firmware/rgb-led",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/firmware/rgb-led.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Power Management & Battery",permalink:"/docs/firmware/power"},next:{title:"Hardware",permalink:"/docs/category/hardware"}},l={},s=[{value:"Examples",id:"examples",level:2},{value:"Blink on trigger",id:"blink-on-trigger",level:3},{value:"Set Color",id:"set-color",level:3}],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rgb-led"},"RGB LED"),(0,o.kt)("p",null,"The RGB LED is connected to the RP2040, and can be controlled by the Pi via i2c by writing to specific registers."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"blink-on-trigger"},"Blink on trigger"),(0,o.kt)("p",null,"To Do"),(0,o.kt)("h3",{id:"set-color"},"Set Color"),(0,o.kt)("p",null,"To Do"))}d.isMDXComponent=!0}}]);