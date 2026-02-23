window.onload = () => {
    updatePage();
}

window.onhashchange = () => {
    updatePage();
}

function updatePage() {
    updateDisplayContent(getHash());
    updateSecondaryNav();
    updateNavVisibility();
    updateFooterPosition();
}

function updateDisplayContent(hash) {
    const currentOnDisplay = document.querySelector('.content.showing');

    if(currentOnDisplay) {
        currentOnDisplay.style.opacity = 0;
        currentOnDisplay.classList.remove('showing'); 
    }

    const replacingContent = document.querySelector('.content' + hash);
    
    replacingContent.classList.add('showing');
    
    setTimeout(() => {
        replacingContent.style.opacity = 1;
    }, 320);
}

function updateSecondaryNav() {
    const selectedNavItem = document.querySelector('.nav-item.selected');

    if(selectedNavItem)
        selectedNavItem.classList.remove('selected');

    const clickedNavItem = document.querySelector(`.nav-item > a[href="${getHash()}"]`);

    clickedNavItem.parentElement.classList.add('selected');
}

function updateNavVisibility() {
    const secondaryNav = document.querySelector('nav.secondary');
    const hash = getHash();

    if(hash !== '#inicio') {
        secondaryNav.classList.add('showing');

        return;
    }
    
    secondaryNav.classList.remove('showing');
}

function updateFooterPosition() {
    const footer = getFooter();

    footer.style.position = 'absolute';
    console.log(footer.style.position);
    footer.style.top = getContentOnDisplay().offsetHeight + 'px';
}

function getContentOnDisplay() {
    return document.querySelector('.content.showing');
}

function getFooter() {
    return document.querySelector('footer');
}

function getHash() {
    let hash = window.location.hash;

    if (hash === '' || hash === null)
        return '#inicio';

    return hash;
}