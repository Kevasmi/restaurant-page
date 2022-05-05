function createCookies(name, price) {
    const cookieDiv = document.createElement('div');
    const cookieHeader = document.createElement('h4');
    const cookieImage = document.createElement('img');
    const cookiePara = document.createElement('p');
    const cookiePricePara = document.createElement('p');
    cookieDiv.classList.add('menu-item');
    cookiePara.classList.add('menu-item-desc');
    cookieHeader.textContent = name;
    cookiePricePara.textContent = price;
    cookiePricePara.classList.add('menu-item-price');
    cookieDiv.appendChild(cookieHeader);
    cookieDiv.appendChild(cookieImage);
    cookieDiv.appendChild(cookiePara);
    cookieDiv.appendChild(cookiePricePara);
    return cookieDiv;
}

function createDips(name, price) {
    const dipDiv = document.createElement('div');
    const dipHeader = document.createElement('h4');
    const dipImage = document.createElement('img');
    const dipPara = document.createElement('p');
    const dipPricePara = document.createElement('p');
    dipDiv.classList.add('menu-item');
    dipPara.classList.add('menu-item-desc');
    dipHeader.textContent = name;
    dipPricePara.textContent = price;
    dipPricePara.classList.add('menu-item-price');
    dipDiv.appendChild(dipHeader);
    dipDiv.appendChild(dipImage);
    dipDiv.appendChild(dipPara);
    dipDiv.appendChild(dipPricePara);
    return dipDiv;
}

export {
    createCookies,
    createDips
}