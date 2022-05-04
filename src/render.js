function cacheDom() {
    const contentDiv = document.querySelector('#content');
    const header = document.createElement('header');
    const logo = document.createElement('p');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const main = document.createElement('main');
    const homeDiv = document.createElement('div');
    const footer = document.createElement('footer');
    logo.classList.add('logo');
    logo.textContent = `DIPP\'T`
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    aboutBtn.textContent = 'About';
    // header.appendChild(logo);
    // header.appendChild(homeBtn);
    // header.appendChild(menuBtn);
    // header.appendChild(aboutBtn);
    // main.appendChild(homeDiv);
    return {contentDiv, header, logo, homeBtn, menuBtn, aboutBtn, main, homeDiv, footer};
}

function appendElements() {
    var x = cacheDom();
    x.contentDiv.appendChild(x.header);
    x.header.appendChild(x.logo);
    x.header.appendChild(x.homeBtn);
    x.header.appendChild(x.menuBtn);
    x.header.appendChild(x.aboutBtn);
    x.contentDiv.appendChild(x.main);
    x.main.appendChild(x.homeDiv);
    x.contentDiv.appendChild(x.footer);
}

function renderPage() {
    appendElements();
}

export {
    renderPage
}