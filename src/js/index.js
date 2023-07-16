import { heroSlider } from './modules/heroSlider';
import { exploreSlider } from './modules/exploreSlider';

// search controls
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// menu controls
const menu = document.querySelector('.hero__menu');
const openMenu = document.getElementById('menu-button__open');
const closeMenu = document.getElementById('menu-button__close');

// scroll top button
const scrollButton = document.getElementById('scroll-top');

// section hero slider
heroSlider();

// section explore-numbers slider
exploreSlider();

window.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// HADNLE OUTSIDE CLICKS
document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.header__search')) {
        if (searchInput.classList.contains('header__search-input--active')) {
            searchInput.classList.remove('header__search-input--active');
        }
    }

    if (!e.target.closest('.hero__menu')) {
        if (menu.classList.contains('hero__menu--active')) {
            console.log('menu contains active');
            menu.classList.remove('hero__menu--active');
            console.log('removed');
        }
    }
});

openMenu.addEventListener('click', (e) => {
    e.stopPropagation();

    menu.classList.add('hero__menu--active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('hero__menu--active');
});

searchButton.addEventListener('click', () => {
    if (!searchInput.classList.contains('header__search-input--active')) {
        searchInput.classList.add('header__search-input--active');
        searchInput.focus();
    } else if (searchInput.value === '') {
        console.log(searchInput);
        searchInput.classList.remove('header__search-input--active');
    }
});

scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
