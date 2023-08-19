"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:5},i="Case Designs & 3D Models",o={unversionedId:"3D",id:"3D",title:"Case Designs & 3D Models",description:"Beepy STEP model",source:"@site/docs/3D.md",sourceDirName:".",slug:"/3D",permalink:"/docs/3D",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/3D.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Schematic",permalink:"/docs/hardware/schematic"},next:{title:"FAQ",permalink:"/docs/faq"}},p={},l=[{value:"Beepy STEP model",id:"beepy-step-model",level:2},{value:"Case Designs",id:"case-designs",level:2},{value:"V1",id:"v1",level:3},{value:"Slim Flat",id:"slim-flat",level:3},{value:"CNC Case",id:"cnc-case",level:3},{value:"Transparent Plastic",id:"transparent-plastic",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"case-designs--3d-models"},"Case Designs & 3D Models"),(0,n.kt)("h2",{id:"beepy-step-model"},"Beepy STEP model"),(0,n.kt)("img",{src:"/img/beepy-v1-3D-render.png",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepy-hardware/blob/main/3D/beepy-device/beepy-v1.step"},(0,n.kt)("strong",{parentName:"a"},"beepy-v1.step"))),(0,n.kt)("h2",{id:"case-designs"},"Case Designs"),(0,n.kt)("p",null,"Below are some case designs for the Beepy. If you have any designs you'd like to share with the community, please submit a Pull Request to this repo (include a brief description and some renders/pics): ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepy-hardware"},(0,n.kt)("strong",{parentName:"a"},"https://github.com/sqfmi/beepy-hardware")),"."),(0,n.kt)("h3",{id:"v1"},"V1"),(0,n.kt)("p",null,"V1 design of a Beepy case, suitable for 3D printing, requires some tweaking for a proper fit. Screws are M2.5x5mm."),(0,n.kt)("img",{src:"/img/beepy-edc.jpg",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepy-hardware/tree/main/3D/beepy-cases/v1"},(0,n.kt)("strong",{parentName:"a"},"STLs and STEP model"))),(0,n.kt)("h3",{id:"slim-flat"},"Slim Flat"),(0,n.kt)("p",null,"Slim, flat, minimal case for the Beepy"),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/01.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/02.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/03.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/04.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/06.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepy-hardware/main/3D/beepy-cases/slim_flat/images/07.jpg",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepy-hardware/tree/main/3D/beepy-cases/slim_flat"},(0,n.kt)("strong",{parentName:"a"},"STLs and STEP model"))),(0,n.kt)("h3",{id:"cnc-case"},"CNC Case"),(0,n.kt)("p",null,"Coming Soon"),(0,n.kt)("h3",{id:"transparent-plastic"},"Transparent Plastic"),(0,n.kt)("p",null,"Coming Soon"))}d.isMDXComponent=!0}}]);