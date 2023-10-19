document.addEventListener("DOMContentLoaded", function () {
    const sidemenu = document.getElementById("sidemenu");
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const navMenu = document.querySelector('nav ul');
  
    function openmenu() {
      sidemenu.style.right = "0";
      closeButton.style.display = "block"; // Show the close button
      menuButton.style.display = "none"; // Hide the menu button
      navMenu.classList.add('show-menu');
    }
  
    function closemenu() {
      sidemenu.style.right = "-200px";
      closeButton.style.display = "none"; // Hide the close button
      menuButton.style.display = "block"; // Show the menu button
      navMenu.classList.remove('show-menu');
    }
  
    menuButton.addEventListener('click', openmenu);
    closeButton.addEventListener('click', closemenu);
  });
  