!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=1)}([function(e,t){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){var e=document.querySelector(".main"),t=document.querySelector(".header-contacts__phone-number-accord"),n=document.querySelector(".header-contacts__arrow"),r=document.querySelector(".popup-dialog-menu"),i=document.querySelector("body"),o=document.querySelector(".button-footer"),a=!1;n.style.zIndex="100",e.addEventListener("click",(function(e){var o=e.target;(o.classList.contains("header-contacts__arrow")||"headerArrow"===o.id)&&(a?(t.style.marginTop="",t.firstChild.style.opacity="0",n.classList.toggle("rotate-header-arrow"),a=!a):(t.style.marginTop="25px",t.firstChild.style.opacity="1",n.classList.toggle("rotate-header-arrow"),a=!a)),o.classList.contains("menu__icon")&&(r.classList.add("header-menu-descktop-show"),i.clientWidth<576&&r.classList.add("header-menu-mobile-show"))})),r.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("close-menu")&&(r.classList.remove("header-menu-descktop-show"),i.clientWidth<576&&r.classList.remove("header-menu-mobile-show")),t.classList.contains("menu-link")&&!t.classList.contains("no-overflow")){e.preventDefault(),r.classList.remove("header-menu-descktop-show"),i.clientWidth<576&&r.classList.remove("header-menu-mobile-show");var n=t.getAttribute("href").substr(1);document.querySelector(".".concat(n)).scrollIntoView({block:"start",behavior:"smooth"})}})),o.addEventListener("click",(function(){event.preventDefault();var e=o.firstChild.getAttribute("href").substr(1);document.querySelector(".".concat(e)).scrollIntoView({block:"start",behavior:"smooth"})}))},i=function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".no-overflow"),n=document.querySelector(".popup-dialog-menu"),r=document.querySelector(".popup-repair-types");t.forEach((function(t){t.addEventListener("click",(function(){n.classList.remove("header-menu-descktop-show"),n.classList.remove("header-menu-mobile-show"),e.style.visibility="visible"}))})),e.addEventListener("click",(function(t){t.target.classList.contains("mobile-hide")&&(e.style.visibility="hidden")})),r.addEventListener("click",(function(e){e.target.classList.contains("close")&&(r.style.visibility="hidden")}))};function o(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=document.querySelector(t),this.check=!1,this.formInputs}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.body={},e.formInputs=e.form.querySelectorAll("input"),e.formInputs.forEach((function(t){("phone"===t.getAttribute("name")||"name"===t.getAttribute("name"))&&(e.body[t.getAttribute("name")]=t.value)})),window.fetch?e.check&&e.postData(e.body).then((function(e){if(200!==e.status)throw new Error("Network status is not 200.");var t=document.querySelector(".popup-thank-bg");t.style.visibility="visible",t.style.cursor="pointer",t.addEventListener("click",(function(){t.style.visibility="hidden"}))})).catch((function(e){console.error(e)})).finally(e.clearInputs()):e.check&&e.ieFormSender(e.body)})),this.form.addEventListener("input",(function(t){var n=t.target;if("name"===n.getAttribute("name"))e.wordsValidator(n);else if("phone"===n.getAttribute("name")){e.numsValidator(n);try{e.maskPhone(".feedback-block__form-input_phone"),e.maskPhone(".feedback__input-input")}catch(e){console.error(e)}}})),this.form.addEventListener("click",(function(t){var n=t.target;if("checkbox"!==n.getAttribute("type")||n.hasAttribute("checked")?n.hasAttribute("checked")&&(n.removeAttribute("checked"),e.check=!e.check):(n.setAttribute("checked","checked"),e.check=!e.check),n.classList.contains("link-privacy")){var r=document.querySelector(".popup-privacy");r.style.visibility="visible",r.addEventListener("click",(function(e){e.target.classList.contains("mobile-hide")&&(r.style.visibility="hidden")}))}})),this.postData=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})},this.numsValidator=function(t){e.value=t.value,t.value=e.value.replace(/[^+\d]/,"")},this.wordsValidator=function(t){e.val=t.value,t.value=e.val.replace(/[^а-я\s\.]/,"")},this.maskPhone=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,i=r.replace(/\D/g,""),o=this.value.replace(/\D/g,""),a=0,s=r.replace(/[_\d]/g,(function(e){return a<o.length?o.charAt(a++)||i.charAt(a):e}));-1!=(a=s.indexOf("_"))&&(s=s.slice(0,a));var c=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}for(var i=0;i<n.length;i++)n[i].addEventListener("input",r),n[i].addEventListener("focus",r),n[i].addEventListener("blur",r)},this.clearInputs=function(){e.formElems=e.form.elements;var t,n=o(e.formElems);try{for(n.s();!(t=n.n()).done;){var r=t.value;"input"===r.tagName.toLowerCase()&&(r.value="")}}catch(e){n.e(e)}finally{n.f()}},this.ieFormSender=function(t){e.request=new XMLHttpRequest,e.request.addEventListener("readystatechange",(function(){if(4===e.request.readyState)if(200===e.request.status){var t=document.querySelector(".popup-thank-bg");t.style.visibility="visible",t.style.cursor="pointer",t.addEventListener("click",(function(){t.style.visibility="hidden"}))}else console.error(e.request.status)})),e.request.open("POST","./server.php"),e.request.setRequestHeader("Content-Type","aplication/json"),e.request.send(JSON.stringify(t))}}}])&&s(t.prototype,n),r&&s(t,r),e}(),u=new c("#feedback1"),l=new c("#feedback2"),d=new c("#feedback3"),f=new c("#feedback4"),h=new c("#feedback5"),v=function(){var e=document.querySelector(".tablet-hide"),t=e.querySelectorAll(".formula-item__icon-inner-text"),n=e.querySelectorAll(".formula-item-popup");t.forEach((function(e){e.addEventListener("mouseenter",(function(e){var t=e.target;console.dir(navigator.userAgent),n.forEach((function(e){(e.className.substr(-2)===t.textContent||e.classList.value.substr(-2)===t.textContent)&&(e.style.visibility="visible",e.style.opacity="1")}))})),e.addEventListener("mouseleave",(function(e){var t=e.target;n.forEach((function(e){(e.className.substr(-2)===t.textContent||e.classList.value.substr(-2)===t.textContent)&&(e.style.visibility="hidden",e.style.opacity="0")}))}))}))};r(),i(),u.init(),l.init(),d.init(),f.init(),h.init(),v()}]);