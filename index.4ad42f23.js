!function(){function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},n=o.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in i){var o=i[t];delete i[t];var n={id:t,exports:{}};return e[t]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){i[t]=o},o.parcelRequired7c6=n),n.register("8slrw",(function(t,o){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),n.register("7AJDX",(function(t,o){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),n.register("ifqQW",(function(t,o){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(t,o){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,o){if(!t)return;if("string"==typeof t)return i.default(t,o);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i.default(t,o)};var e,i=(e=n("8NIkP"))&&e.__esModule?e:{default:e}})),n.register("8NIkP",(function(t,o){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,o){(null==o||o>t.length)&&(o=t.length);for(var e=0,i=new Array(o);e<o;e++)i[e]=t[e];return i}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,o){return r.default(t)||s.default(t,o)||f.default(t,o)||l.default()};var r=c(n("8slrw")),s=c(n("7AJDX")),l=c(n("ifqQW")),f=c(n("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}var m,p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var d=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,x=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof o&&o&&o.Object===Object&&o,w="object"==typeof self&&self&&self.Object===Object&&self,h=g||w||Function("return this")(),v=Object.prototype.toString,k=Math.max,N=Math.min,I=function(){return h.Date.now()};function C(o){var e=void 0===o?"undefined":t(p)(o);return!!o&&("object"==e||"function"==e)}function A(o){if("number"==typeof o)return o;if(function(o){return"symbol"==(void 0===o?"undefined":t(p)(o))||function(t){return!!t&&"object"==typeof t}(o)&&"[object Symbol]"==v.call(o)}(o))return NaN;if(C(o)){var e="function"==typeof o.valueOf?o.valueOf():o;o=C(e)?e+"":e}if("string"!=typeof o)return 0===o?o:+o;o=o.replace(d,"");var i=y.test(o);return i||x.test(o)?b(o.slice(2),i?2:8):u.test(o)?NaN:+o}m=function(t,o,e){var i,n,a,r,s,l,f=0,c=!1,m=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(o){var e=i,a=n;return i=n=void 0,f=o,r=t.apply(a,e)}function u(t){return f=t,s=setTimeout(x,o),c?d(t):r}function y(t){var e=t-l;return void 0===l||e>=o||e<0||m&&t-f>=a}function x(){var t=I();if(y(t))return b(t);s=setTimeout(x,function(t){var e=o-(t-l);return m?N(e,a-(t-f)):e}(t))}function b(t){return s=void 0,p&&i?d(t):(i=n=void 0,r)}function g(){var t=I(),e=y(t);if(i=arguments,n=this,l=t,e){if(void 0===s)return u(l);if(m)return s=setTimeout(x,o),d(l)}return void 0===s&&(s=setTimeout(x,o)),r}return o=A(o)||0,C(e)&&(c=!!e.leading,a=(m="maxWait"in e)?k(A(e.maxWait)||0,o):a,p="trailing"in e?!!e.trailing:p),g.cancel=function(){void 0!==s&&clearTimeout(s),f=0,i=l=n=s=void 0},g.flush=function(){return void 0===s?r:b(I())},g};var z,W,O={};function T(t){return fetch("https://restcountries.com/v3.1/name/".concat(t,"?fields=name,capital,population,flags,languages\n  ")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}z=void 0!==o?o:"undefined"!=typeof window?window:O,W=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var o,e="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(o){return o||(o="head"),null!==t.document[o]||(s('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},f=function(){var t={},o=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var i=function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o&&"[object Object]"===Object.prototype.toString.call(e[i])?t[i]=f(t[i],e[i]):t[i]=e[i])};e<arguments.length;e++)i(arguments[e]);return t},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,p=function(s,c,p,u){if(!l("body"))return!1;o||d.Notify.init({});var y=f(!0,o,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof u&&!Array.isArray(u)){var x={};"object"==typeof p?x=p:"object"==typeof u&&(x=u),o=f(!0,o,x)}var b,g,w=o[s.toLocaleLowerCase("en")];m++,"string"!=typeof c&&(c="Notiflix "+s),o.plainText&&(b=c,(g=t.document.createElement("div")).innerHTML=b,c=g.textContent||g.innerText||""),!o.plainText&&c.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),c='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),c.length>o.messageMaxLength&&(c=c.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),o.cssAnimation||(o.cssAnimationDuration=0);var h=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(h.id=r.wrapID,h.style.width=o.width,h.style.zIndex=o.zindex,h.style.opacity=o.opacity,"center-center"===o.position?(h.style.left=o.distance,h.style.top=o.distance,h.style.right=o.distance,h.style.bottom=o.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):"center-top"===o.position?(h.style.left=o.distance,h.style.right=o.distance,h.style.top=o.distance,h.style.bottom="auto",h.style.margin="auto"):"center-bottom"===o.position?(h.style.left=o.distance,h.style.right=o.distance,h.style.bottom=o.distance,h.style.top="auto",h.style.margin="auto"):"right-bottom"===o.position?(h.style.right=o.distance,h.style.bottom=o.distance,h.style.top="auto",h.style.left="auto"):"left-top"===o.position?(h.style.left=o.distance,h.style.top=o.distance,h.style.right="auto",h.style.bottom="auto"):"left-bottom"===o.position?(h.style.left=o.distance,h.style.bottom=o.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=o.distance,h.style.top=o.distance,h.style.left="auto",h.style.bottom="auto"),o.backOverlay){var v=t.document.getElementById(r.overlayID)||t.document.createElement("div");v.id=r.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=o.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=w.backOverlayColor||o.backOverlayColor,v.className=o.cssAnimation?"nx-with-animation":"",v.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(h);var k=t.document.createElement("div");k.id=o.ID+"-"+m,k.className=o.className+" "+w.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=o.fontSize,k.style.color=w.textColor,k.style.background=w.background,k.style.borderRadius=o.borderRadius,k.style.pointerEvents="all",o.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+o.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',o.cssAnimation&&(k.style.animationDuration=o.cssAnimationDuration+"ms");var N="";if(o.closeButton&&"function"!=typeof p&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)k.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+c+"</span>"+(o.closeButton?N:"");else{var I="";s===e?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+c+"</span>"+(o.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+c+"</span>"+(o.closeButton?N:"");if("left-bottom"===o.position||"right-bottom"===o.position){var C=t.document.getElementById(r.wrapID);C.insertBefore(k,C.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var A=t.document.getElementById(k.id);if(A){var z,W,O=function(){A.classList.add("nx-remove");var o=t.document.getElementById(r.overlayID);o&&h.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(z)},T=function(){if(A&&null!==A.parentNode&&A.parentNode.removeChild(A),h.childElementCount<=0&&null!==h.parentNode){h.parentNode.removeChild(h);var o=t.document.getElementById(r.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(W)};if(o.closeButton&&"function"!=typeof p&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){O();var t=setTimeout((function(){T(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"==typeof p||o.clickToClose)&&A.addEventListener("click",(function(){"function"==typeof p&&p(),O();var t=setTimeout((function(){T(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!=typeof p){var j=function(){z=setTimeout((function(){O()}),o.timeout),W=setTimeout((function(){T()}),o.timeout+o.cssAnimationDuration)};j(),o.pauseOnHover&&(A.addEventListener("mouseenter",(function(){A.classList.add("nx-paused"),clearTimeout(z),clearTimeout(W)})),A.addEventListener("mouseleave",(function(){A.classList.remove("nx-paused"),j()})))}}if(o.showOnlyTheLastOne&&m>0)for(var M=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+m+"])"),E=0;E<M.length;E++){var S=M[E];null!==S.parentNode&&S.parentNode.removeChild(S)}o=f(!0,o,y)},d={Notify:{init:function(e){o=f(!0,r,e),function(o,e){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}}(c,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return s("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,i){p(e,t,o,i)},failure:function(t,o,e){p(i,t,o,e)},warning:function(t,o,e){p(n,t,o,e)},info:function(t,o,e){p(a,t,o,e)}}};return"object"==typeof t.Notiflix?f(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return W(z)})):"object"==typeof O?O=W(z):z.Notiflix=W(z),T();document.querySelector(".country-list"),document.querySelector(".country-info");var j=document.querySelector("#search-box");j.addEventListener("input",t(m)((function(){T(j.value.trim())}),300))}();
//# sourceMappingURL=index.4ad42f23.js.map
