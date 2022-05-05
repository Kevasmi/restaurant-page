function cacheDom() {
    const contentDiv = document.querySelector('#content');
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    logo.classList.add('logo');
    logo.textContent = `DIPP\'T`;
    homeBtn.classList.add('home-button');
    homeBtn.textContent = 'Home';
    menuBtn.classList.add('menu-button');
    menuBtn.textContent = 'Menu';
    contactBtn.classList.add('contact-button');
    contactBtn.textContent = 'Contact';
    return {contentDiv, header, logo, homeBtn, menuBtn, contactBtn, main, footer};
}

export {
    cacheDom
}