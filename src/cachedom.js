function cacheDom() {
    const contentDiv = document.querySelector('#content');
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const main = document.createElement('main');
    const homeDiv = document.createElement('div');
    const homeLogo = document.createElement('h2');
    const homePara = document.createElement('p');
    const footer = document.createElement('footer');
    logo.classList.add('logo');
    logo.textContent = `DIPP\'T`;
    homeBtn.classList.add('home-button');
    homeBtn.textContent = 'Home';
    menuBtn.classList.add('menu-button');
    menuBtn.textContent = 'Menu';
    contactBtn.classList.add('contact-button');
    contactBtn.textContent = 'Contact';
    homeDiv.setAttribute('id', 'home-check');
    homeLogo.textContent = `DIPP\'T`;
    homePara.textContent = `DIPP'T is a delicious new eating experience coming to a town near you. Who doesn't love cookies? Nobody, that's who! What is everyone's favorite go-to when eating cookies? Milk of course. This timeless pair has lasted for generations, and DIPP'T is ready to provide that experience too, but it's turning it up a notch to the next level! Come by and dip not in just milk, but tea, pudding, oreo fluff, and so many more options. So good, you won't stop at just one!`;
    homeDiv.appendChild(homeLogo);
    homeDiv.appendChild(homePara);

    return {contentDiv, header, logo, homeBtn, menuBtn, contactBtn, main, homeDiv, homePara, footer};
}

export {
    cacheDom
}