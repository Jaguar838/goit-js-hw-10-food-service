import menuJson from './menu.json';
import menuTemplate from './menu.hbs'

const menuData = {
    menu: menuJson,
}
const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;