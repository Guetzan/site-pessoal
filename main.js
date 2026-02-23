window.onload = () => {
    switchDisplayContent(window.location.hash);
}

window.onhashchange = () => {
    switchDisplayContent(window.location.hash);
}

let contentOnDisplay = document.querySelector('.content.showing');

const secondaryNav = document.querySelector('nav.secondary');
const display = document.getElementById('content-display');
const teste = document.getElementById("teste");

function switchDisplayContent(hash) {
    const content = document.querySelector(hash);

    if(content === contentOnDisplay) 
        return;

    if(content === document.querySelector('#inicio'))
        secondaryNav.style.opacity = 0;
    
    if(contentOnDisplay === document.querySelector('#inicio'))
        secondaryNav.style.opacity = 1;


    contentOnDisplay.classList.remove('showing');
    content.classList.add('showing');
    contentOnDisplay = content;

    updateSecondaryNav();
}

let selectedNavItem;

function updateSecondaryNav() {
    if(selectedNavItem) {
        selectedNavItem.classList.remove('selected');
    }

    selectedNavItem = secondaryNav.querySelector(`a[href="${window.location.hash}"]`).parentElement;


    selectedNavItem.classList.add('selected');
}