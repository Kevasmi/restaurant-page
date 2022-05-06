function createHome() {
    const homeDiv = document.createElement('div');
    const homeLogo = document.createElement('h2');
    const homePara = document.createElement('p');
    homeLogo.textContent = `DIPP'T`;
    homePara.textContent = `DIPP'T is a delicious new eating experience coming to a town near you. Who doesn't love cookies? Nobody, that's who! What is everyone's favorite go-to when eating cookies? Milk of course. This timeless pair has lasted for generations, and DIPP'T is ready to provide that experience too, but it's turning it up a notch to the next level! Come by and dip not in just milk, but tea, pudding, oreo fluff, and so many more options. So good, you won't stop at just one!`;
    homeDiv.setAttribute('id', 'home-check');
    homeDiv.appendChild(homeLogo);
    homeDiv.appendChild(homePara);
    return {homeDiv};
}

function createMenu() {
    const menuDiv = document.createElement('div');
    const menuLogo = document.createElement('h2');
    const cookieHeader = document.createElement('h3');
    const cookieGrid = document.createElement('div');
    const dipHeader = document.createElement('h3');
    const dipGrid = document.createElement('div');
    menuLogo.textContent = `Menu`;
    menuDiv.setAttribute('id', 'menu-check');
    cookieHeader.textContent = 'Cookies';
    cookieGrid.classList.add('menu-grid');
    dipHeader.textContent = 'Dips';
    dipGrid.classList.add('menu-grid');
    menuDiv.appendChild(menuLogo);
    menuDiv.appendChild(cookieHeader);
    menuDiv.appendChild(cookieGrid);
    menuDiv.appendChild(dipHeader);
    menuDiv.appendChild(dipGrid);
    return {menuDiv, cookieGrid, dipGrid};
}

function createContact() {
    const contactDiv = document.createElement('div');
    const contactLogo = document.createElement('h2');
    const contactPara = document.createElement('p');
    contactLogo.textContent = `Contact Us`;
    contactPara.textContent = '(123) 456-7890';
    contactDiv.setAttribute('id', 'contact-check');
    contactDiv.appendChild(contactLogo);
    contactDiv.appendChild(contactPara);
    return {contactDiv};
}

export {
    createHome,
    createMenu,
    createContact
}