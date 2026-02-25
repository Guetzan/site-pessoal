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
    replacingContent.style.opacity = 1;
}

function updateSecondaryNav() {
    const secondaryNav = getSecondaryNav();
    const selectedNavItem = secondaryNav.querySelector('li.selected');

    if(selectedNavItem)
        selectedNavItem.classList.remove('selected');

    const clickedNavItem = secondaryNav.querySelector(`a[href="${getHash()}"]`);

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
    footer.style.top = getContentOnDisplay().offsetHeight + 'px';
}

function getContentOnDisplay() {
    return document.querySelector('.content.showing');
}

function getFooter() {
    return document.querySelector('footer');
}

function getSecondaryNav() {
    return document.querySelector('nav.secondary');
}

function getHash() {
    let hash = window.location.hash;

    if (hash === '' || hash === null)
        return '#inicio';

    return hash;
}

const myname = document.querySelector('.personal-info h1');

myname.addEventListener('mouseover', () => {
    const tooltip = document.querySelector('.tooltip');

    easterEggTimeout = setTimeout(() => {
        tooltip.classList.add('showing');
    }, 2200)
});

myname.addEventListener('mouseout', () => {
    clearTimeout(easterEggTimeout);

    const tooltip = document.querySelector('.tooltip');

    tooltip.classList.remove('showing');
});