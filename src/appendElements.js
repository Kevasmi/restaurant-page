import {cacheDom} from "./cacheDom"
import {createHome} from './createDivs';

function appendElements() {
    const cache = cacheDom();
    const home = createHome();
    cache.contentDiv.appendChild(cache.header);
    cache.header.appendChild(cache.logo);
    cache.header.appendChild(cache.homeBtn);
    cache.header.appendChild(cache.menuBtn);
    cache.header.appendChild(cache.contactBtn);
    cache.contentDiv.appendChild(cache.main);
    cache.main.appendChild(home.homeDiv);
    cache.contentDiv.appendChild(cache.footer);
}

export{
    appendElements
}