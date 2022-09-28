(()=>{"use strict";var n={581:(n,t,e)=>{e.d(t,{Z:()=>i});var a=e(81),s=e.n(a),r=e(645),o=e.n(r)()(s());o.push([n.id,"/* Start: keyboard */\n.keyboard {\n    display: flex;\n    width: 100%;\n    height: 50%;\n    flex-direction: column;\n}\n\n.keyrow {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.key {\n    width: 100%;\n    margin: 5px;\n    border: 1px solid transparent;\n    padding: .2rem .6rem;\n    color: var(--color-keys);\n    font-size: var(--font-size-medium);\n    background-color: var(--color-keys-light);\n    border-radius: 5px;\n    -webkit-transition: var(--transition);\n    -o-transition: var(--transition);\n    transition: var(--transition);\n    cursor: pointer;\n}\n\n.chosen {\n    background: var(--color-primary);\n    color: #FFFFFF;\n}\n\n.wrong {\n    background: var(--color-secondary);\n    color: #FFFFFF;\n}\n\n@media screen and (max-width: 500px) {\n    .keyboard {\n        margin-top: 15px;\n    }\n\n    .key {\n        margin: 2px;\n        padding: 1px;\n    }\n}\n\n/* End: keyboard */",""]);const i=o},542:(n,t,e)=>{e.d(t,{Z:()=>i});var a=e(81),s=e.n(a),r=e(645),o=e.n(r)()(s());o.push([n.id,"/* Start: phrase */\n\nli {\n    list-style: none;\n}\n\n.phrase {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 50%;\n}\n\n.letter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 150px;\n    margin: 5px;\n    border: 1px solid transparent;\n    padding: .2rem .6rem;\n    font-size: var(--font-size-medium);\n    color: transparent;\n    background: var(--color-neutral-light);\n    border-radius: 5px;\n}\n\n.space {\n    width: 100%;\n}\n\n\n.show {\n    color:var(--color-font-letters);\n    background-color: var(--color-box-letters);\n    font-size: 20px;\n    padding: 15px;\n    margin: 2px;\n    border-radius: 5px;\n    transition: all .7s ease;\n}\n\n@media screen and (max-width: 768px) {\n    .phrase {\n        flex-wrap: wrap;\n        margin-top: 10px;\n    }\n\n    .show {\n        padding: 5px;\n    }\n\n    .letter {\n        width: 30px;\n    }\n}\n\n/* End: phrase */",""]);const i=o},401:(n,t,e)=>{e.d(t,{Z:()=>i});var a=e(81),s=e.n(a),r=e(645),o=e.n(r)()(s());o.push([n.id,"/* Start: Hangman styles in pixels */\n.parts {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    min-width: 200px;\n    height: 250px;\n}\n\n.parts-blank {\n    background-color: transparent;\n}\n\n.parts-base {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n}\n\n.parts-base, .parts-horizontal, .parts-vertical {\n    background-color: #000;\n}\n\n.show-body {\n    background-color: var(--color-secondary);\n    border: 1px solid #000;\n    transition: all .7s ease;\n\n}\n\n.show-clothes {\n    background-color: var(--color-primary);\n    transition: all .7s ease;\n}\n/* End: Hangman styles in pixels */",""]);const i=o},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,s,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);a&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var r={},o=[],i=0;i<n.length;i++){var l=n[i],c=a.base?l[0]+a.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=e(u),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(v);else{var b=s(v,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:b,references:1})}o.push(u)}return o}function s(n,t){var e=t.domAPI(t);e.update(n);return function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,s){var r=a(n=n||[],s=s||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var i=e(r[o]);t[i].references--}for(var l=a(n,s),c=0;c<r.length;c++){var d=e(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var s=void 0!==e.layer;s&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,s&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={id:a,exports:{}};return n[a](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),a=e(795),s=e.n(a),r=e(569),o=e.n(r),i=e(565),l=e.n(i),c=e(216),d=e.n(c),u=e(589),p=e.n(u),v=e(401),b={};b.styleTagTransform=p(),b.setAttributes=l(),b.insert=o().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=d();t()(v.Z,b);v.Z&&v.Z.locals&&v.Z.locals;var m=[],h=e(542),y={};y.styleTagTransform=p(),y.setAttributes=l(),y.insert=o().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=d();t()(h.Z,y);h.Z&&h.Z.locals&&h.Z.locals;var f=e(581),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d();t()(f.Z,g);f.Z&&f.Z.locals&&f.Z.locals;var k=document.querySelector("#btn-start"),x=document.querySelector("#btn-new-phrase"),w=document.querySelector("#btn-back-home"),E=document.querySelector("#btn-form-new-phrase"),L=document.querySelector("#input-phrase"),S=document.querySelector("#input-phrase-message"),T=document.querySelector("#start-section"),q=document.querySelector("#form-section"),F=document.querySelector("#game-section");T.style.display="flex";var M=[],Z=[],I="",A=["java","python","java script","alura latam","desarrollo web","desarrollo movil","desarrollo de sofware","inteligencia artificial"],j=function(n,t){n.style.display="none",t.style.display="flex"},z=function(n){var t=document.getElementById("start-message"),e='                         \n            <h1 class="theEnd-title">Sigue intentándolo!!!</h1>\n            <p class="theEnd-description">La frase es: <strong>" '.concat(I,' "</strong></p>\n            <p class="theEnd-description"> Una palabra difícil, la próxima vez tendrás éxito, ¿vamos a por una nueva?</p>\' \n        ');t.innerHTML=n?'\n            <h1 class="theEnd-title">Felicidades gano el juego!!!</h1>\n            <p class="theEnd-description"> Una palabra descubierta, eres genial para adivinar, ¿vamos a por una nueva?</p>\'\n        ':e,function(n){n?(T.classList.remove("start-loser"),T.classList.add("start-winner")):(T.classList.remove("start-winner"),T.classList.add("start-loser"))}(n)},C=function(n){n||(z(!1),j(F,T)),document.querySelectorAll(".hidden").length||(z(!0),j(F,T))},H=function(n,t){var e=!0;!function(n,t){return!!n.includes(t)}(I,t.innerText)?(t.classList.add("wrong"),e=function(){if(!m.length)return!1;var n=m.shift(),t=document.querySelector(".".concat(n));return"parts-shirt"==n||"parts-pants"==n?t.classList.add("show-clothes"):t.classList.add("show-body"),!0}()):(t.classList.add("chosen"),function(n,t){n.forEach((function(n){n.innerText==t&&(n.classList.remove("hidden"),n.classList.add("show"))}))}(n,t.innerText)),t.disabled=!0,C(e)},P=function(){var n,t,e;document.getElementById("phrase-container").innerHTML="",I=(n=A)[Math.floor(Math.random()*n.length)],m=["parts-head","parts-shirt","parts-pants","parts-arm1","parts-arm2","parts-leg1","parts-leg2"],document.getElementById("game-image").innerHTML='\n        <div class="parts">\n                            \n            <div class="parts-vertical"></div>\n            <div class="parts-horizontal"></div>\n            <div class="parts-horizontal"></div>\n            <div class="parts-horizontal"></div>\n            <div class="parts-blank"></div>\n\n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n\n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-head"></div>\n            <div class="parts-blank"></div>\n\n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-arm1"></div>\n            <div class="parts-shirt"></div>\n            <div class="parts-arm2"></div>\n\n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-pants"></div>\n            <div class="parts-blank"></div>\n            \n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-leg1"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-leg2"></div>\n\n            <div class="parts-vertical"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n            <div class="parts-blank"></div>\n\n            <div class="parts-base"></div>\n            <div class="parts-base"></div>\n            <div class="parts-base"></div>\n            <div class="parts-base"></div>\n            <div class="parts-base"></div>\n        </div>\n    ',function(n){var t=document.getElementById("phrase-container"),e=document.createElement("ul");e.classList.add("phrase");for(var a="",s=0;s<n.length;s++)" "===n[s]?a+='<li class="space"> </li>':a+='<li class="letter hidden">'.concat(n[s],"</li>");e.innerHTML=a,t.append(e)}(I),t=document.getElementById("phrase-container"),(e=document.createElement("div")).innerHTML='\n        <div class="keyboard" id="keyboard">\n            <div class="keyrow">\n                <button class="key">q</button>\n                <button class="key">w</button>\n                <button class="key">e</button>\n                <button class="key">r</button>\n                <button class="key">t</button>\n                <button class="key">y</button>\n                <button class="key">u</button>\n                <button class="key">i</button>\n                <button class="key">o</button>\n                <button class="key">p</button>\n            </div>\n\n            <div class="keyrow">\n                <button class="key">a</button>\n                <button class="key">s</button>\n                <button class="key">d</button>\n                <button class="key">f</button>\n                <button class="key">g</button>\n                <button class="key">h</button>\n                <button class="key">j</button>\n                <button class="key">k</button>\n                <button class="key">l</button>\n            </div>\n\n            <div class="keyrow">\n                <button class="key">z</button>\n                <button class="key">x</button>\n                <button class="key">c</button>\n                <button class="key">v</button>\n                <button class="key">b</button>\n                <button class="key">n</button>\n                <button class="key">m</button>\n            </div>\n        </div>\n    ',t.append(e.lastElementChild),M=document.querySelectorAll(".letter"),Z=document.querySelectorAll(".key"),B(Z,M)},B=function(n,t){n.forEach((function(n){n.addEventListener("click",(function(){H(t,n)}))}))};k.addEventListener("click",(function(){P(),j(T,F)})),x.addEventListener("click",(function(){j(T,q)})),E.addEventListener("click",(function(n){n.preventDefault();try{var t=L.value.toLowerCase();t.length>=4&&t.length<=25?(A.push(t),L.value="",S.classList.remove("input-phrase-message-error"),alert("Nueva frase: ".concat(t)),j(q,T)):S.classList.add("input-phrase-message-error")}catch(n){S.classList.add("input-phrase-message-error")}})),w.addEventListener("click",(function(){L.value="",S.classList.remove("input-phrase-message-error"),j(q,T)}))})()})();