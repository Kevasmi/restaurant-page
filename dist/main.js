(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("p"),o=document.createElement("button"),d=document.createElement("button"),a=document.createElement("button"),c=document.createElement("main"),l=document.createElement("div"),m=document.createElement("footer");return n.classList.add("logo"),n.textContent="DIPP'T",o.textContent="Home",d.textContent="Menu",a.textContent="About",t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(a),c.appendChild(l),{contentDiv:e,header:t,logo:n,homeBtn:o,menuBtn:d,aboutBtn:a,main:c,footer:m}}e(),e().contentDiv.appendChild(e().header),e().header.appendChild(e().homeBtn),e().header.appendChild(e().menuBtn),e().header.appendChild(e().aboutBtn),e().contentDiv.appendChild(e().main),e().contentDiv.appendChild(e().footer),console.log(e().logo)})();