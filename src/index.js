import './scss/styles.scss';
import './templates-menu/menu.js'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body');

body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);
if (localStorage.getItem('theme') === Theme.DARK) themeSwitcher.checked = true

themeSwitcher.addEventListener('click', e => {
    if (e.target.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
})
