import {createHome, createMenu, createContact} from './createDivs';
import {createCookies, createDips} from './createMenuItems';

function bindEvents() {
    const main = document.querySelector('main');
    const homeBtn = document.querySelector('.home-button');
    const menuBtn = document.querySelector('.menu-button');
    const contactBtn = document.querySelector('.contact-button');
    homeBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'home-check') {
            main.removeChild(main.firstChild);
            let home = createHome();
            main.appendChild(home.homeDiv);
        } 
    });
    menuBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'menu-check') {
            main.removeChild(main.firstChild);
            let menu = createMenu();
            main.appendChild(menu.menuDiv);
            menu.cookieGrid.appendChild(createCookies('Chocolate Chip', '$2.00'));
            menu.cookieGrid.appendChild(createCookies('Brookie', '$3.50'));
            menu.dipGrid.appendChild(createDips('Milk', '$1.50'));
            menu.dipGrid.appendChild(createDips('Banana Pudding', '$1.50'));
        } 
    });
    contactBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'contact-check') {
            main.removeChild(main.firstChild);
            let contact = createContact();
            main.appendChild(contact.contactDiv);
        } 
    })
}

export {
    bindEvents
}