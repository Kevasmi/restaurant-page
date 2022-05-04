import {cacheDom} from "./cacheDom"

function appendElements() {
    const cache = cacheDom();
    cache.contentDiv.appendChild(cache.header);
    cache.header.appendChild(cache.logo);
    cache.header.appendChild(cache.homeBtn);
    cache.header.appendChild(cache.menuBtn);
    cache.header.appendChild(cache.contactBtn);
    cache.contentDiv.appendChild(cache.main);
    cache.main.appendChild(cache.homeDiv);
    cache.contentDiv.appendChild(cache.footer);
}

export{
    appendElements
}