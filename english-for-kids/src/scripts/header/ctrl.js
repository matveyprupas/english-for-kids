import { menu } from './view';

const switchBtn = document.querySelector('div.header__switch');
const burger = document.querySelector('div.header__burger');
const menuPart = document.querySelectorAll('div.menu__part');

function switchMode() {
  switchBtn.classList.toggle('checked');
}

function openMenu() {
  burger.classList.toggle('header__menu-opened');
  menu.classList.toggle('menu_opened');
}

function closeMenu(e) {
  if (e.code !== 'Escape') return;
  burger.classList.remove('header__menu-opened');
  menu.classList.remove('menu_opened');
}

function closeMenuWithoutEvent() {
  burger.classList.remove('header__menu-opened');
  menu.classList.remove('menu_opened');
}

function chooseMenuPart(e) {
  menuPart.forEach((el) => el.classList.remove('menu__part_choosed'));
  e.target.classList.add('menu__part_choosed');
}

switchBtn.addEventListener('click', switchMode);
burger.addEventListener('click', openMenu);
document.addEventListener('keydown', closeMenu);
menuPart.forEach((el) => el.addEventListener('click', chooseMenuPart));

export { closeMenuWithoutEvent };