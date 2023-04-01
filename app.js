document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', show);
    close.addEventListener('click', hide);

    function show() {
        navMenu.style.display = 'flex';
        navMenu.style.top = '0';
    }

    function hide() {
        navMenu.style.top = '-100%';
    }
});