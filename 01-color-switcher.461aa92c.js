const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let d=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.disabled=!0,console.log("hola");t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,o.style.backgroundColor=l(),d=setInterval((()=>{o.style.backgroundColor=l()}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearTimeout(d)}));
//# sourceMappingURL=01-color-switcher.461aa92c.js.map
