let currentActiveItem = document.querySelector('li.selected');
const navItems = document.querySelectorAll('.nav-item > a');

window.onload = () => {
    currentActiveItem.classList.remove('selected')
    currentActiveItem.classList.add('selected')
};

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if(navItem === currentActiveItem)
            return;
        
        if(navItem === navItems.item(0))
            return;

        currentActiveItem.classList.remove('selected');
        navItem.parentElement.classList.add('selected');
        
        currentActiveItem = navItem.parentElement;
    });
});

