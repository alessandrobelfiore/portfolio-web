const navToggle = document.querySelector('.nav__button');
const nav = document.querySelector('.nav__list');


navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('change');
    nav.classList.toggle('nav--visible');
})