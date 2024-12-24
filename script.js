const sideMenu = document.querySelector('#sideMenu');


function openMenu() {
    sideMenu.style.transform = 'translateX(-15rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(15rem)';
}