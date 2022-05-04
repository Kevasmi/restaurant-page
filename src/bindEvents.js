function bindEvents() {
    const main = document.querySelector('main');
    const homeBtn = document.querySelector('.home-button');
    const menuBtn = document.querySelector('.menu-button');
    const contactBtn = document.querySelector('.contact-button');
    homeBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'home-check') {
            main.removeChild(main.firstChild);
            const homeDiv = document.createElement('div');
            const homeLogo = document.createElement('h2');
            const homePara = document.createElement('p');
            homeLogo.textContent = `DIPP'T`;
            homePara.textContent = `DIPP'T is a delicious new eating experience coming to a town near you. Who doesn't love cookies? Nobody, that's who! What is everyone's favorite go-to when eating cookies? Milk of course. This timeless pair has lasted for generations, and DIPP'T is ready to provide that experience too, but it's turning up a notch to the next level! Come by and dip not in just milk, but tea, pudding, oreo fluff, and so many more options. So good, you won't stop at just one!`;
            homeDiv.setAttribute('id', 'home-check');
            main.appendChild(homeDiv);
            homeDiv.appendChild(homeLogo);
            homeDiv.appendChild(homePara);
        } 
    });
    menuBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'menu-check') {
            main.removeChild(main.firstChild);
            const menuDiv = document.createElement('div');
            const menuLogo = document.createElement('h2');
            const menuPara = document.createElement('p');
            menuLogo.textContent = `Menu`;
            menuPara.textContent = 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Odio facilisis mauris sit amet massa vitae. Lacus viverra vitae congue eu consequat ac felis donec. Dictum sit amet justo donec enim diam.';
            menuDiv.setAttribute('id', 'menu-check');
            main.appendChild(menuDiv);
            menuDiv.appendChild(menuLogo);
            menuDiv.appendChild(menuPara);
        } 
    });
    contactBtn.addEventListener('click', () => {
        if (main.firstChild.id !== 'contact-check') {
            main.removeChild(main.firstChild);
            const contactDiv = document.createElement('div');
            const contactLogo = document.createElement('h2');
            const contactPara = document.createElement('p');
            contactLogo.textContent = `Contact Us`;
            contactPara.textContent = '(123) 456-7890';
            contactDiv.setAttribute('id', 'contact-check');
            main.appendChild(contactDiv);
            contactDiv.appendChild(contactLogo);
            contactDiv.appendChild(contactPara);
        } 
    })
}

export {
    bindEvents
}