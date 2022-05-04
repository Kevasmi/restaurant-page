import {appendElements} from "./appendElements";
import {bindEvents} from "./bindEvents";

function renderPage() {
    appendElements();
    bindEvents();
}

export {
    renderPage
}