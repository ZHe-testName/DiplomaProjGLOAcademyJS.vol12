!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=1)}([function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";n.r(e);n(0);var i=function(){var t=document.querySelector(".main"),e=document.querySelector(".header-contacts__phone-number-accord"),n=document.querySelector(".header-contacts__arrow"),i=document.querySelector(".popup-dialog-menu"),r=document.querySelector("body"),o=document.querySelector(".button-footer"),s=!1;n.style.zIndex="100",t.addEventListener("click",(function(t){var o=t.target;(o.classList.contains("header-contacts__arrow")||"headerArrow"===o.id)&&(s?(e.style.marginTop="",e.firstChild.style.opacity="0",n.classList.toggle("rotate-header-arrow"),s=!s):(e.style.marginTop="25px",e.firstChild.style.opacity="1",n.classList.toggle("rotate-header-arrow"),s=!s)),"main"===o.id&&i.classList.remove("header-menu-descktop-show"),o.classList.contains("menu__icon")&&(i.classList.add("header-menu-descktop-show"),r.clientWidth<576&&i.classList.add("header-menu-mobile-show"))})),i.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("close-menu")&&(i.classList.remove("header-menu-descktop-show"),r.clientWidth<576&&i.classList.remove("header-menu-mobile-show")),e.classList.contains("menu-link")&&!e.classList.contains("no-overflow")){t.preventDefault(),i.classList.remove("header-menu-descktop-show"),r.clientWidth<576&&i.classList.remove("header-menu-mobile-show");var n=e.getAttribute("href").substr(1);document.querySelector(".".concat(n)).scrollIntoView({block:"start",behavior:"smooth"})}})),o.addEventListener("click",(function(){event.preventDefault();var t=o.firstChild.getAttribute("href").substr(1);document.querySelector(".".concat(t)).scrollIntoView({block:"start",behavior:"smooth"})}));for(var a=0;a<t.childNodes.length;a++)"header"!==t.childNodes[a].nodeName.toLowerCase()&&"div"!==t.childNodes[a].nodeName.toLowerCase()||t.childNodes[a].addEventListener("click",(function(){i.classList.remove("header-menu-descktop-show")}))},r=function(){var t=document.querySelector(".popup-repair-types"),e=document.querySelectorAll(".no-overflow"),n=document.querySelector(".popup-dialog-menu"),i=document.querySelector(".popup-repair-types");e.forEach((function(e){e.addEventListener("click",(function(){n.classList.remove("header-menu-descktop-show"),n.classList.remove("header-menu-mobile-show"),t.style.visibility="visible"}))})),t.addEventListener("click",(function(e){var n=e.target;(n.classList.contains("mobile-hide")||n.classList.contains("popup-repair-types"))&&(t.style.visibility="hidden")})),i.addEventListener("click",(function(t){t.target.classList.contains("close")&&(i.style.visibility="hidden")}))};function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw r}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=document.querySelector(e),this.check=!1,this.formInputs}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t=this;this.form.addEventListener("submit",(function(e){e.preventDefault();var n=document.querySelector(".popup-privacy");t.body={},t.formInputs=t.form.querySelectorAll("input"),t.formInputs.forEach((function(e){("phone"===e.getAttribute("name")||"name"===e.getAttribute("name"))&&(t.body[e.getAttribute("name")]=e.value)})),window.fetch?t.check?t.postData(t.body).then((function(t){if(200!==t.status)throw new Error("Network status is not 200.");var e=document.querySelector(".popup-thank-bg");e.style.visibility="visible",e.style.cursor="pointer",e.addEventListener("click",(function(){e.style.visibility="hidden"}))})).catch((function(t){console.error(t)})).finally(t.clearInputs()):n.style.visibility="visible":t.check?t.ieFormSender(t.body):n.style.visibility="visible"})),this.form.addEventListener("input",(function(e){var n=e.target;if("name"===n.getAttribute("name"))t.wordsValidator(n);else if("phone"===n.getAttribute("name")){t.numsValidator(n);try{t.maskPhone(".feedback-block__form-input_phone"),t.maskPhone(".feedback__input-input")}catch(t){console.error(t)}}})),this.form.addEventListener("click",(function(e){var n=document.querySelector(".popup-privacy"),i=e.target;"checkbox"!==i.getAttribute("type")||i.hasAttribute("checked")?i.hasAttribute("checked")&&(i.removeAttribute("checked"),t.check=!t.check):(i.setAttribute("checked","checked"),t.check=!t.check),i.classList.contains("link-privacy")&&(n.style.visibility="visible"),n.addEventListener("click",(function(t){var e=t.target;(e.classList.contains("mobile-hide")||e.classList.contains("popup-privacy"))&&(n.style.visibility="hidden")}))})),this.postData=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(t)})},this.numsValidator=function(e){t.value=e.value,e.value=t.value.replace(/[^+\d]/,"")},this.wordsValidator=function(e){t.val=e.value,e.value=t.val.replace(/[^а-я\s\.]/,"")},this.maskPhone=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(t);function i(t){var n=t.keyCode,i=e,r=i.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,a=i.replace(/[_\d]/g,(function(t){return s<o.length?o.charAt(s++)||r.charAt(s):t}));-1!=(s=a.indexOf("_"))&&(a=a.slice(0,s));var c=i.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=a),"blur"==t.type&&this.value.length<5&&(this.value="")}for(var r=0;r<n.length;r++)n[r].addEventListener("input",i),n[r].addEventListener("focus",i),n[r].addEventListener("blur",i)},this.clearInputs=function(){t.formElems=t.form.elements;var e,n=o(t.formElems);try{for(n.s();!(e=n.n()).done;){var i=e.value;"input"===i.tagName.toLowerCase()&&(i.value="")}}catch(t){n.e(t)}finally{n.f()}},this.ieFormSender=function(e){t.request=new XMLHttpRequest,t.request.addEventListener("readystatechange",(function(){if(4===t.request.readyState)if(200===t.request.status){var e=document.querySelector(".popup-thank-bg");e.style.visibility="visible",e.style.cursor="pointer",e.addEventListener("click",(function(){e.style.visibility="hidden"}))}else console.error(t.request.status)})),t.request.open("POST","./server.php"),t.request.setRequestHeader("Content-Type","aplication/json"),t.request.send(JSON.stringify(e))}}}])&&a(e.prototype,n),i&&a(e,i),t}(),l=new c("#feedback1"),u=new c("#feedback2"),d=new c("#feedback3"),h=new c("#feedback4"),f=new c("#feedback5"),p=new c("#feedback6"),y=function(){var t=document.querySelector("#formula").querySelector(".tablet-hide"),e=t.querySelectorAll(".formula-item__icon"),n=t.querySelectorAll(".formula-item-popup");e.forEach((function(e,i){e.addEventListener("mouseenter",(function(e){var r=e.target;if(Math.floor(n[i].getBoundingClientRect().top)>0)n[i].style.visibility="visible",n[i].style.opacity="1";else{for(var o=0;o<t.children.length;o++)t.children[o]===r.parentNode.parentNode&&(t.children[o].style.zIndex="99");n[i].firstChild.classList.add("rotate-formula-card-par"),n[i].classList.add("rotate-formula-card"),n[i].style.visibility="visible",n[i].style.opacity="1"}})),e.addEventListener("mouseleave",(function(e){e.target;n[i].style.visibility="hidden",n[i].style.opacity="0",n[i].classList.remove("rotate-formula-card"),n[i].firstChild.classList.remove("rotate-formula-card-par");for(var r=0;r<t.children.length;r++)t.children[r].hasAttribute("style")&&t.children[r].removeAttribute("style")}))}))};function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(e){var n=e.main,i=e.wrap,r=e.position,o=void 0===r?0:r,s=e.nextArrow,a=e.prevArrow,c=e.slidesToShow,l=void 0===c?1:c,u=e.infinity,d=void 0!==u&&u,h=e.slideCounter,f=e.transDir,p=void 0===f?"X":f,y=e.slideTranslate,v=void 0!==y&&y,m=e.controlsOn,b=void 0===m||m;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.nextArrow=this.main.querySelector(s),this.prevArrow=this.main.querySelector(a),this.slidesToShow=l,this.slideCounter=h,this.transDir=p,this.slideTranslate=v,this.controlsOn=b,this.option={infinity:d,position:o,slideWidth:Math.floor(100/this.slidesToShow)}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.zheStyles(),this.controlSlider()}},{key:"zheStyles",value:function(){this.main.classList.add("zhe-slider-style"),this.wrap.classList.add("zhe-slider-wrap-style");for(var t=0;t<this.slides.length;t++)this.slides[t].classList.add("zhe-slider-slide-style")}},{key:"controlSlider",value:function(){this.nextArrow.addEventListener("click",this.nextSlide.bind(this)),this.prevArrow.addEventListener("click",this.prevSlide.bind(this))}},{key:"turnOffControls",value:function(){this.controlsOn=!1}},{key:"turnOnControls",value:function(){this.controlsOn=!0}},{key:"nextSlide",value:function(){if(this.controlsOn)if(this.option.infinity?(this.option.position<=this.slides.length-this.slidesToShow&&++this.option.position,this.option.position>this.slides.length-this.slidesToShow&&(this.option.position=0)):this.option.position<this.slides.length-this.slidesToShow&&++this.option.position,this.slideTranslate)for(var t=0;t<this.slides.length;t++)this.slides[t].style.transform="translate".concat(this.transDir,"(-").concat(this.option.position*this.option.slideWidth,"%)");else this.wrap.style.transform="translate".concat(this.transDir,"(-").concat(this.option.position*this.option.slideWidth,"%)")}},{key:"prevSlide",value:function(){if(this.controlsOn)if(this.option.infinity?(this.option.position>=0&&--this.option.position,this.option.position<0&&this.option.infinity&&(this.option.position=this.slides.length-this.slidesToShow)):this.option.position>0&&--this.option.position,this.slideTranslate)for(var t=0;t<this.slides.length;t++)this.slides[t].style.transform="translate".concat(this.transDir,"(-").concat(this.option.position*this.option.slideWidth,"%)");else this.wrap.style.transform="translate".concat(this.transDir,"(-").concat(this.option.position*this.option.slideWidth,"%)")}}])&&v(e.prototype,n),i&&v(e,i),t}();function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t,e,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=E(t);if(e){var r=E(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(o,t);var e,n,i,r=k(o);function o(){return w(this,o),r.apply(this,arguments)}return e=o,(n=[{key:"nextSlide",value:function(){S(E(o.prototype),"nextSlide",this).call(this),this.controlsOn&&this.countShow()}},{key:"prevSlide",value:function(){S(E(o.prototype),"prevSlide",this).call(this),this.controlsOn&&this.countShow()}},{key:"countShow",value:function(){var t=this.main.querySelector(".slider-counter-content__current"),e=this.main.querySelector(".slider-counter-content__total");t.textContent="".concat(this.option.position+1),e.textContent="".concat(this.slides.length)}}])&&g(e.prototype,n),i&&g(e,i),o}(m),O=function(){for(var t,e,n=document.querySelector(".nav-list-repair"),i=document.querySelector(".repair-types-slider"),r=[],o=0;o<i.children.length;o++)r.push(new q({main:".repair-types-slider-wrap",wrap:".types-repair".concat(o+1),nextArrow:".slider-arrow_right",prevArrow:".slider-arrow_left"})),r[o].init(),r[o].turnOffControls();r[0].countShow(),r[0].turnOnControls(),n.addEventListener("click",(function(t){var e=t.target;if("button"===e.tagName.toLowerCase())for(var o=e.classList[2].substr(-1),s=function(t){n.children[t].className.indexOf(o)>0?(i.children[t].style.display="flex",r.forEach((function(e,n){n===t?(e.turnOnControls(),e.countShow()):e.turnOffControls()})),n.children[t].classList.add("active")):(n.children[t].classList.remove("active"),i.children[t].style.display="none")},a=0;a<n.children.length;a++)s(a)})),t="repair-custom-slider-style__zhe",(e=document.createElement("style")).id=t,e.type="text/css",e.textContent="\n            .zhe-slider-wrap-style{\n                display: flex;\n                transition: transform .5s;\n                will-change: transform;\n            }\n\n            .zhe-slider-slide-style{\n                flex: 0 0 100%;\n                margin: auto 0;\n                transition: transform .5s;\n                will-change: transform;\n            }\n        ",document.head.appendChild(e)},A=function(){var t=document.querySelector("#problems"),e=(t.querySelector(".tablet-hide"),t.querySelectorAll(".problems-item-popup"));t.querySelectorAll(".problems-item__icon").forEach((function(t,n){t.addEventListener("mouseenter",(function(){e[n].style.visibility="visible",e[n].style.opacity="1",t.children[1].classList.add("active-item")})),t.addEventListener("mouseleave",(function(){e[n].style.visibility="hidden",e[n].style.opacity="0",t.children[1].classList.remove("active-item")}))}))},x=function(){var t,e,n=document.querySelector(".transparency-slider-wrap"),i=document.querySelector(".popup-transparency"),r=document.querySelector("#transparency_right"),o=document.querySelector("#transparency_left");(n.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("transparency-item__img")){for(var o=n.children[0],s=0;s<o.children.length;s++)if(o.children[s].children[0]===e)for(var a=0;a<s;a++){var c=new Event("click");r.dispatchEvent(c)}i.style.visibility="visible"}})),i.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("mobile-hide")||e.classList.contains("popup-transparency")){i.style.visibility="hidden";var n=new Event("click");o.dispatchEvent(n),o.dispatchEvent(n)}})),document.body.offsetWidth<1074)&&(new m({main:".transparency-slider-wrap",wrap:".transparency-slider",nextArrow:"#transparency-arrow_right",prevArrow:"#transparency-arrow_left"}).init(),t="repair-custom-documents-style__zhe",(e=document.createElement("style")).id=t,e.type="text/css",e.textContent="\n            .zhe-slider-style{\n                margin: auto;\n            }\n            .zhe-slider-wrap-style{\n                display: flex;\n                transition: transform .5s;\n                will-change: transform;\n            }\n\n            .zhe-slider-slide-style{\n                flex: 0 0 100%;\n                margin: auto;\n                transition: transform .5s;\n                will-change: transform;\n            }\n        ",document.head.appendChild(e))},C=function(){var t=document.querySelector(".accordion"),e=t.querySelectorAll("h2");t.addEventListener("click",(function(t){var n=t.target;"h2"===n.tagName.toLowerCase()&&(e.forEach((function(t){t!==n&&t.classList.remove("msg-active")})),n.classList.toggle("msg-active"))}))},T=function(){var t=document.querySelectorAll(".button_wide"),e=document.querySelector(".popup-consultation");t.forEach((function(t){t.addEventListener("click",(function(){e.style.visibility="visible"}))})),e.addEventListener("click",(function(t){var n=t.target;(n.classList.contains("close-consultation")||n.classList.contains("popup-consultation"))&&(e.style.visibility="hidden")}))},j=function(){var t=new q({main:".popup-transparency-slider-wrap",wrap:".popup-transparency-slider",nextArrow:"#transparency_right",prevArrow:"#transparency_left",slideTranslate:!0});t.init(),t.countShow()};i(),r(),l.init(),u.init(),d.init(),h.init(),f.init(),p.init(),y(),O(),A(),x(),C(),T(),j()}]);