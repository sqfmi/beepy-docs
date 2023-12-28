"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(c,i(i({ref:t},d),{},{components:r})):a.createElement(c,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Follow these steps to setup your Beepy. Out of the box, the display will only show static. If you see yellow lines on the display, that is the screen protector and can be removed.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Software",permalink:"/docs/category/software"}},p={},s=[{value:"1. Hardware Setup",id:"1-hardware-setup",level:2},{value:"2. Firmware Update",id:"2-firmware-update",level:2},{value:"3. Choose an Operating System",id:"3-choose-an-operating-system",level:2},{value:"Setting up a Raspbian System",id:"setting-up-a-raspbian-system",level:3},{value:"Setting up a Buildroot System",id:"setting-up-a-buildroot-system",level:3},{value:"Powering on/off your Beepy",id:"powering-onoff-your-beepy",level:2},{value:"Changing Font Size",id:"changing-font-size",level:2},{value:"Join the Beepy Discord!",id:"join-the-beepy-discord",level:2},{value:"Matrix Bridge",id:"matrix-bridge",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Follow these steps to setup your Beepy. Out of the box, the display will only show static. If you see yellow lines on the display, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"that is the screen protector"))," and can be removed."),(0,n.kt)("h2",{id:"1-hardware-setup"},"1. Hardware Setup"),(0,n.kt)("p",null,"If you are installing your own Raspberry Pi Zero or any other SBC, make sure all the mounting pins are properly aligned to each hole before tightening the screws. ",(0,n.kt)("strong",{parentName:"p"},"If you cannot see the pin through a header hole, then it is not properly mounted"),'. You can move the board around until all the pins "click" into place. You can skip this step if the Pi is already pre-installed.'),(0,n.kt)("img",{alt:"Beepy Raspberry Pi Zero mounting diagram",src:"/img/beepy-header-mount-diagram.jpg",width:"600"}),(0,n.kt)("p",null,"The USB-C port at the bottom powers and charges the Beepy. ",(0,n.kt)("strong",{parentName:"p"},"Do not power the Raspberry Pi Zero through its Micro-USB port (PWR IN).")),(0,n.kt)("h2",{id:"2-firmware-update"},"2. Firmware Update"),(0,n.kt)("p",null,"Update Beepy's firmware to ensure driver compatibility and the latest device features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ardangelo/beepberry-rp2040/releases/latest/download/i2c_puppet.uf2"},"latest firmware image")),(0,n.kt)("li",{parentName:"ul"},"Slide the power switch off (left if facing up)"),(0,n.kt)("li",{parentName:"ul"},"Connect the Beepy to your computer via USB-C"),(0,n.kt)("li",{parentName:"ul"},'While holding the "End Call" key (top right on the keypad), slide the power switch on'),(0,n.kt)("li",{parentName:"ul"},"The Beepy will present itself as a USB mass storage device, drag'n'drop the new firmware (i2c_puppet.uf2) into the drive and it will reboot with the new firmware"),(0,n.kt)("li",{parentName:"ul"},"Note: The LED will remain green until the driver packages below are installed and the system has rebooted")),(0,n.kt)("h2",{id:"3-choose-an-operating-system"},"3. Choose an Operating System"),(0,n.kt)("p",null,"There are two choices of operating systems to run on your Beepy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raspbian: a powerful, customizable distribution with all the bells and whistles"),(0,n.kt)("li",{parentName:"ul"},"Buildroot: a slimmed-down, Beepy-centric image with a fast boot")),(0,n.kt)("h3",{id:"setting-up-a-raspbian-system"},"Setting up a Raspbian System"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager tool")," to flash an SD card with the Raspberry Pi OS ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Lite"))," image"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose OS - Raspberry Pi OS (other) - ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Raspberry Pi OS Lite (32-bit) image"))),(0,n.kt)("li",{parentName:"ul"},"Click the gear icon \u2699 (or press ",(0,n.kt)("inlineCode",{parentName:"li"},"CTRL + SHIFT + X"),") to set the username, password, hostname, WiFi, and enable SSH"),(0,n.kt)("li",{parentName:"ul"},"Make sure your computer and the Pi are on the same WiFi network in order to SSH in later"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SSH into your Beepy and install the driver packages"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s --compressed "https://ardangelo.github.io/beepy-ppa/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/beepy.gpg >/dev/null \\\n&& sudo curl -s --compressed -o /etc/apt/sources.list.d/beepy.list "https://ardangelo.github.io/beepy-ppa/beepy.list" \\\n&& sudo apt update \\\n&& sudo apt-get -y install beepy-kbd sharp-drm \\\n&& sudo shutdown -r now\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your Beepy with is now ready, enjoy!"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Review the ",(0,n.kt)("a",{parentName:"li",href:"/docs/firmware/keyboard#symbol-key-map"},"default symbol keymap")," ")))),(0,n.kt)("h3",{id:"setting-up-a-buildroot-system"},"Setting up a Buildroot System"),(0,n.kt)("p",null,"Buildroot is a slimmed-down, Beepy-centric image with a fast boot, compatible with the Raspberry Pi Zero 2 W. It is automatically set up with Beepy device drivers and a set of useful software. Tailored for on-the-go communication, it ships with the following applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gomuks")," - Beeper command line client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mosh")," - Mobile remote shell"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"w3m")," - Text based browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aerc")," - Command line email client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nmtui")," - Network management"),(0,n.kt)("li",{parentName:"ul"},"Python 3")),(0,n.kt)("p",null,"To use the Beepy Buildroot image, download and flash the latest release here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardangelo/beepberry-buildroot/releases"},"https://github.com/ardangelo/beepberry-buildroot/releases")),(0,n.kt)("p",null,"The initial boot will take about 30 seconds to resize disk partitions to fill your SD card. Subsequent boots take around 8 seconds from power-on to Tmux."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure timezone: edit ",(0,n.kt)("inlineCode",{parentName:"li"},"/boot/timezone.txt")),(0,n.kt)("li",{parentName:"ul"},"Configure Wi-Fi: use ",(0,n.kt)("inlineCode",{parentName:"li"},"nmtui")," or edit ",(0,n.kt)("inlineCode",{parentName:"li"},"/boot/wlan/<your_network_name>.psk")),(0,n.kt)("li",{parentName:"ul"},"Updating Buildroot image: reflash SD card, or run ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo update_buildroot"))),(0,n.kt)("p",null,"Review the ",(0,n.kt)("a",{parentName:"p",href:"/docs/firmware/keyboard#symbol-key-map"},"default symbol keymap")),(0,n.kt)("h2",{id:"powering-onoff-your-beepy"},"Powering on/off your Beepy"),(0,n.kt)("p",null,'Long holding the "End Call" key (5 seconds) will trigger the key ',(0,n.kt)("inlineCode",{parentName:"p"},"KEY_POWER")," and safely shutdown the Pi. The LED will turn red until OS shutdown has completed."),(0,n.kt)("p",null,"Please wait another few seconds until the disk activity light has turned off to ensure disks are synced."),(0,n.kt)("p",null,'After shutting down using the "End Call" key, holding the key for 1 second will turn the Pi back on.'),(0,n.kt)("h2",{id:"changing-font-size"},"Changing Font Size"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"/boot/cmdline.txt"),", edit ",(0,n.kt)("inlineCode",{parentName:"p"},"fbcon=font:VGA8x8")," to change the font/size. The next largest size is ",(0,n.kt)("inlineCode",{parentName:"p"},"VGA8x16"),". See ",(0,n.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/fb/fbcon.txt"},"fbcon")," for more details."),(0,n.kt)("h2",{id:"join-the-beepy-discord"},"Join the Beepy Discord!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/QERrSferdF"},(0,n.kt)("strong",{parentName:"a"},"Discord Invite"))),(0,n.kt)("h3",{id:"matrix-bridge"},"Matrix Bridge"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#beepberry-general:beeper.com"},(0,n.kt)("strong",{parentName:"a"},"#beepy-general"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#beepberry-dev:beeper.com"},(0,n.kt)("strong",{parentName:"a"},"#beepy-dev"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#beepberry-apps:beeper.com"},(0,n.kt)("strong",{parentName:"a"},"#beepy-apps"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#beepberry-hw:beeper.com"},(0,n.kt)("strong",{parentName:"a"},"#beepy-hw"))))}m.isMDXComponent=!0}}]);