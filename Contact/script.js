document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const closeButton = document.getElementById('close-button');
    const cartButton = document.getElementById('cart-button');
    const accountButton = document.getElementById('account-button');
    const sidebarCart = document.querySelector('.sidebar-cart');
    const sidebarAccount = document.querySelector('.sidebar-account');

    burgerMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        sidebarCart.classList.remove('active');
        sidebarAccount.classList.remove('active');
    });

    // 2.Account and cart sidebar:
    cartButton.addEventListener('click', () => {
        sidebarCart.classList.toggle('active');
    });

    accountButton.addEventListener('click', () => {
        sidebarAccount.classList.toggle('active');
    });

});
