import './scss/styles.scss';
import menuJson from './templates-menu/menu.json';
import menuTemplate from './templates-menu/menu.hbs'

const menuData = {
    menu: menuJson,
}
const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const checkboxSwitcher = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body');

function switcherTheme() {
    if (localStorage.theme === Theme.LIGHT) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}


checkboxSwitcher.addEventListener('change', switcherTheme);

currentTheme()

function currentTheme(event) {
    body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);
    if (localStorage.getItem('theme') === Theme.DARK) checkboxSwitcher.checked = 'true'
}