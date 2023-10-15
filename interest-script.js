document.addEventListener("DOMContentLoaded", function () {
    // Function to open the side menu
    function openmenu() {
        var sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "0";
    }

    // Function to close the side menu
    function closemenu() {
        var sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "-200px";
    }

    // Google Apps Script URL for form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxBsR1LDj_xZAgACGQhymbGITdefYC75v3jQPJwSIIVuPdnQ1L36241H7p5PNDxPzrLrA/exec';

    // Form submission logic
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "<span style='color: black;'>Message sent! I'll check it immediately.</span>";

                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });

    // Function to open and close the navigation menu
    const menuButton = document.querySelector('.fa-solid.fa-bars');
    const closeButton = document.querySelector('.fa-regular.fa-circle-xmark');
    const navMenu = document.querySelector('nav ul');

    function openMenu() {
        navMenu.classList.add('show-menu'); // Add a class to show the menu
    }

    function closeMenu() {
        navMenu.classList.remove('show-menu'); // Remove the class to hide the menu
    }

    // Event listener for the menu button
    menuButton.addEventListener('click', openMenu);

    // Event listener for the close button
    closeButton.addEventListener('click', closeMenu);

    // Get references to tab links and tab contents
    var tablinks = document.querySelectorAll(".tab-links"); // Use querySelectorAll to get all tab links
    var tabcontents = document.querySelectorAll(".tab-contents"); // Use querySelectorAll to get all tab contents

    // Event listener for tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener('click', function (event) {
            var tabname = this.getAttribute("data-tab");
            opentab(tabname);
        });
    }

    // Function to handle tab switching
    function opentab(tabname) {
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove("active-tab");
        }

        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
        }

        document.getElementById(tabname).classList.add("active-tab");
        event.target.classList.add("active-link");
    }
});
