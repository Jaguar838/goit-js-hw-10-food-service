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

function switcherTheme(event) {
    body.setAttribute('class', body.classList.contains(Theme.DARK) ? Theme.LIGHT : Theme.DARK);
    // console.log(body.classList.contains(Theme.DARK))
    localStorage.setItem('theme', body.classList.value)
    // console.log(body.classList.value)
}

checkboxSwitcher.addEventListener('change', switcherTheme);

currentTheme()

function currentTheme(event) {
    body.setAttribute('class', localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));
    if (localStorage.getItem('theme') === Theme.DARK) { checkboxSwitcher.checked = 'true' }
}