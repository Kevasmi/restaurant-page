function createHome() {
    const homeDiv = document.createElement('div');
    const homeParaDiv = document.createElement('div');
    const homeLogo = document.createElement('h2');
    const homeParaOne = document.createElement('p');
    const homeParaTwo = document.createElement('p');
    const homeParaThree = document.createElement('p');
    const homeParaFour = document.createElement('p');
    homeParaDiv.classList.add('home-para-div');
    homeLogo.textContent = `DIPP'T`;
    homeParaOne.textContent = `DIPP'T is a delicious new eating experience coming to a town near you.`;
    homeParaTwo.textContent =  `Who doesn't love cookies? Nobody, that's who!`;
    homeParaThree.textContent = `What is everyone's favorite go-to when eating cookies? Milk of course!` ;
    homeParaFour.textContent = `This timeless pair has lasted for generations, and DIPP'T is ready to provide that experience too, but it's turning it up a notch to the next level! Come by and dip not in just milk, but tea, pudding, oreo fluff, and so many more options. So good, you won't stop at just one!`
    homeDiv.setAttribute('id', 'home-check');
    homeDiv.appendChild(homeLogo);
    homeDiv.appendChild(homeParaDiv);
    homeParaDiv.appendChild(homeParaOne);
    homeParaDiv.appendChild(homeParaTwo);
    homeParaDiv.appendChild(homeParaThree);
    homeParaDiv.appendChild(homeParaFour);
    return {homeDiv};
}

function createMenu() {
    const menuDiv = document.createElement('div');
    const menuLogo = document.createElement('h2');
    const cookieHeader = document.createElement('h3');
    const cookieGrid = document.createElement('div');
    const dipHeader = document.createElement('h3');
    const dipGrid = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-check');
    cookieGrid.classList.add('menu-grid');
    dipGrid.classList.add('menu-grid');
    menuLogo.textContent = `Menu`;
    cookieHeader.textContent = 'Cookies';
    dipHeader.textContent = 'Dips';
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
    const contactMap = document.createElement('img');
    contactDiv.setAttribute('id', 'contact-check');
    contactMap.setAttribute('src', `images/map.png`)
    contactLogo.textContent = 'Contact Us';
    contactPara.textContent = '(123) 456-7890';
    contactDiv.appendChild(contactLogo);
    contactDiv.appendChild(contactPara);
    contactDiv.appendChild(contactMap);
    return {contactDiv};
}

export {
    createHome,
    createMenu,
    createContact
}