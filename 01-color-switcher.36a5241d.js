!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),n=null;function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,console.log("hola");t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,o.style.backgroundColor=a(),n=setInterval((function(){o.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearTimeout(n)}))}();
//# sourceMappingURL=01-color-switcher.36a5241d.js.map
