import { menu, headerBurger, headerSwitch } from './view';

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

function closeMenuByClick(e) {
  const lineArr = headerBurger.querySelectorAll('line');
  const svgItem = headerBurger.querySelector('svg');
  let isLine = false;
  lineArr.forEach((el) => {
    if (el === e.target) {
      isLine = true;
    }
  });
  if (isLine || svgItem === e.target || menu === e.target) return;

  closeMenuWithoutEvent();
}

function closeMenuWithoutEvent() {
  headerBurger.classList.remove('header__menu-opened');
  menu.classList.remove('menu_opened');
}

function chooseMenuPart(e) {
  const URLHash = window.location.hash;
  const stateJSON = decodeURIComponent(URLHash.substr(1));
  const pageNameStr = JSON.parse(stateJSON).pagename.toLowerCase();
  const menuPart = document.querySelectorAll('div.menu__part');
  menuPart.forEach((el) => el.classList.remove('menu__part_choosed'));
  document.querySelector(`#${pageNameStr}_page_btn`).classList.add('menu__part_choosed');
}

export {
  closeMenuWithoutEvent, openMenu, closeMenu, switchMode, chooseMenuPart, closeMenuByClick,
};
