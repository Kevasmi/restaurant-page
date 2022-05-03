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
    header.appendChild(logo);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(aboutBtn);
    main.appendChild(homeDiv);
    return {contentDiv, header, logo, homeBtn, menuBtn, aboutBtn, main, footer};
}

function appendElements() {
    cacheDom();
    cacheDom().contentDiv.appendChild(cacheDom().header);
    cacheDom().header.appendChild(cacheDom().homeBtn);
    cacheDom().header.appendChild(cacheDom().menuBtn);
    cacheDom().header.appendChild(cacheDom().aboutBtn);
    cacheDom().contentDiv.appendChild(cacheDom().main);
    cacheDom().contentDiv.appendChild(cacheDom().footer);
    console.log(cacheDom().logo)
}

function renderPage() {
    appendElements();
}

export {
    renderPage
}