(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]),a.push([e.id,"form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.main-div {\r\n  box-shadow: 1px 6px 17px -1px rgba(34, 60, 80, 0.19);\r\n  width: 40vw;\r\n  font-family: Poppins, serif;\r\n  font-size: 18px;\r\n  background-color: #fff;\r\n}\r\n\r\nsection {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-div {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #d0d0d0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  padding: 15px;\r\n  font-style: oblique;\r\n  font-size: 18px;\r\n  border-bottom: 1px solid #d0d0d0;\r\n}\r\n\r\np {\r\n  padding: 10px;\r\n}\r\n\r\n#clear {\r\n  text-align: center;\r\n  color: #989898;\r\n  margin: 0;\r\n  padding: 25px;\r\n}\r\n\r\n#clear:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  float: right;\r\n}\r\n\r\n#header {\r\n  font-weight: bold;\r\n  padding: 15px;\r\n}\r\n\r\n.listContent {\r\n  flex: 2;\r\n  border: none;\r\n  margin: 18px 0;\r\n}\r\n\r\n.listContent-disable {\r\n  text-decoration: line-through;\r\n  opacity: 0.6;\r\n}\r\n\r\n.remove-icon-active {\r\n  display: none;\r\n}\r\n\r\n.icon2 {\r\n  display: none;\r\n}\r\n\r\n.changeBg {\r\n  background-color: #fffed3;\r\n}\r\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),l=n.n(s),c=n(216),d=n.n(c),p=n(589),u=n.n(p),f=n(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}let v=[];document.querySelector("section").innerHTML='\n  <div class="main-div">\n    <p id="header">Today\'s To Do <i class="fas fa-sync"></i></p>\n    <form class="form">\n      <input class="dataEntry" type="text" placeholder="Add to your list..." required></input>\n    </form>\n    <p id="clear">Clear all completed</p>\n  </div>\n';const h=()=>{const e=document.querySelector(".form"),t=document.createElement("div");t.className="input-div",e.appendChild(t);const n=document.createElement("input");n.className="input",n.type="checkbox";const r=document.createElement("p");r.className="listContent";const o=document.createElement("i");o.className="fas fa-ellipsis-v";const i=document.createElement("i");i.className="fas fa-trash-alt icon2",t.append(n,r,o,i);let a=1;n.addEventListener("click",(()=>{o.classList.toggle("remove-icon-active"),i.classList.toggle("icon2"),r.classList.toggle("listContent-disable"),t.classList.toggle("changeBg");const e=JSON.parse(localStorage.getItem("list")),n=(e.filter((e=>e.description===r.textContent)),[]),s=document.querySelectorAll(".input-div");for(let t=0;t<e.length;t+=1)s[t].classList.contains("changeBg")?(e[t].completed=!0,a+=1):e[t].completed=!1,n.push(e[t]),localStorage.setItem("list",JSON.stringify(n))})),document.querySelector("#clear").addEventListener("click",(()=>{const t=JSON.parse(localStorage.getItem("list")),n=document.querySelectorAll(".changeBg");for(let t=0;t<n.length;t+=1)e.removeChild(n[t]);const r=[];for(let e=0;e<t.length;e+=1)!0!==t[e].completed&&r.push(t[e]);localStorage.setItem("list",JSON.stringify(r))})),i.addEventListener("click",(()=>{e.removeChild(t);const n=JSON.parse(localStorage.getItem("list")),o=n.filter((e=>e.description===r.textContent)),i=[];for(let e=0;e<n.length;e+=1)o[0].description!==n[e].description?i.push(n[e]):console.log("salom");localStorage.setItem("list",JSON.stringify(i))})),o.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.className="listContent",e.style.backgroundColor="#fffed3",t.style.backgroundColor="#fffed3",e.value=r.textContent,t.replaceChild(e,r),e.addEventListener("keypress",(n=>{if("Enter"===n.key&&e.value){const n=JSON.parse(localStorage.getItem("list")),o=n.filter((e=>e.description===r.textContent)),i=[];for(let t=0;t<n.length;t+=1)n[t].index===o[0].index&&(n[t].description=e.value),i.push(n[t]),localStorage.setItem("list",JSON.stringify(i));t.replaceChild(r,e),r.textContent=e.value,t.style.backgroundColor="#fff"}}))}))},y=document.querySelector(".dataEntry");y.addEventListener("keypress",(e=>{if("Enter"===e.key&&y.value){const t=new g(y.value,!1,v.length);v.push(t),e.preventDefault(),h();const n=document.querySelectorAll(".listContent");for(let e=0;e<v.length;e+=1)n[e].textContent=v[e].description;y.value=null,localStorage.setItem("list",JSON.stringify(v))}})),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("list"));for(let t=0;t<e.length;t+=1)h(),document.querySelectorAll(".listContent")[t].textContent=e[t].description,!0===e[t].completed&&(e[t].completed=!1),localStorage.setItem("list",JSON.stringify(e)),v=e}))})()})();