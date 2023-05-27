(()=>{"use strict";var e={};function t(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("p");t.id="hero",t.classList.add("home"),n.textContent="Welcome to Mow's Cafe, where feline charm meets leisurely indulgence! Step into our cozy sanctuary, inspired by the irresistible allure of lazy cats. Nestled in the heart of New York, our cafe offers a unique retreat from the hustle and bustle of everyday life. From the moment you enter, you'll be enveloped by a serene ambiance that evokes the tranquil spirit of our feline companions. Indulge in our delightful assortment of beverages and delectable treats, crafted with love and care. Join us as we celebrate the art of slowing down, one lazy stretch at a time.",n.classList.add("heroText"),t.append(n);const c=document.createElement("div");c.append(t),e.append(c)}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!t;)t=c[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=e.p+"2599387a2b7e7e81bbcf.jpg",c=e.p+"37af8bc7196d53c92f47.jpg",a=e.p+"1dc45a6c9ae0c13858a8.jpg",o=e.p+"720b86f9ac24ec049f62.jpg";function r(){document.querySelector("#hero").remove()}const i=document.querySelector("#content"),d=document.createElement("header");d.classList.add("header");const s=document.createElement("button");s.textContent="Mow's Cafe",s.classList.add("heading"),d.append(s),i.append(d),t();const l=document.createElement("button"),u=document.createElement("button");l.textContent="MENU",l.classList.add("menu-button"),u.textContent="CONTACT US",u.classList.add("contact");const m=document.createElement("div");m.classList.add("lower-btn"),m.append(l),m.append(u),i.append(m),s.addEventListener("click",(()=>{r(),t()})),l.addEventListener("click",(()=>{r(),function(){const e=[{image:n,heading:"Cold Brew",price:"USD 14.99"},{image:c,heading:"Americano",price:"USD 9.99"},{image:a,heading:"Boba Tea",price:"USD 22.99"},{image:o,heading:"Hot Chocolate",price:"USD 9.99"}],t=document.querySelector("#content"),r=document.querySelector(".lower-btn"),i=document.createElement("div");i.id="hero",i.classList.add("menu");const d=document.createElement("div");d.classList.add("cards"),e.forEach((e=>{const t=document.createElement("div");t.classList.add("card");const n=document.createElement("img"),c=document.createElement("h3"),a=document.createElement("p");n.src=e.image,c.textContent=e.heading,a.textContent=e.price,t.append(n,c,a),d.append(t)})),i.append(d),t.insertBefore(i,r)}()})),u.addEventListener("click",(()=>{r()}))})();