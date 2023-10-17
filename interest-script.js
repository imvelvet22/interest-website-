document.addEventListener("DOMContentLoaded", function () {
    const sidemenu = document.getElementById("sidemenu");
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const navMenu = document.querySelector('nav ul');

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    function openMenu() {
        navMenu.classList.add('show-menu');
    }

    function closeMenu() {
        navMenu.classList.remove('show-menu');
    }

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
});
