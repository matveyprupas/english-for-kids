import { menu, headerBurger, headerSwitch } from './view';

// const switchBtn = document.querySelector('div.header__switch');
// const burger = document.querySelector('div.header__burger');

function switchMode() {
  headerSwitch.classList.toggle('checked');
}

function openMenu() {
  headerBurger.classList.toggle('header__menu-opened');
  menu.classList.toggle('menu_opened');
}

function closeMenu(e) {
  if (e.code !== 'Escape') return;
  headerBurger.classList.remove('header__menu-opened');
  menu.classList.remove('menu_opened');
}

function closeMenuWithoutEvent() {
  headerBurger.classList.remove('header__menu-opened');
  menu.classList.remove('menu_opened');
}

function chooseMenuPart(e) {
  const menuPart = document.querySelectorAll('div.menu__part');
  menuPart.forEach((el) => el.classList.remove('menu__part_choosed'));
  e.target.classList.add('menu__part_choosed');
}

// headerSwitch.addEventListener('click', switchMode);
// headerBurger.addEventListener('click', openMenu);
// document.addEventListener('keydown', closeMenu);
// menuPart.forEach((el) => el.addEventListener('click', chooseMenuPart));

export {
  closeMenuWithoutEvent, openMenu, closeMenu, switchMode, chooseMenuPart,
};
