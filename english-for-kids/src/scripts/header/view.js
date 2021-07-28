import { menuArray } from './model';
import { openMenu, closeMenu, switchMode, chooseMenuPart } from './ctrl';
import {
    switchToMainPage, switchToActionAPage, switchToActionBPage, switchToActionCPage, switchToAnimalPage, switchToClothesPage
  } from '../spa/ctrl';

// !!! HEADER VIEW !!!
// !!! HEADER VIEW !!!
// !!! HEADER VIEW !!!

const header = document.createElement('header');
header.classList.add('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('container');

const headerBurger = document.createElement('div');
headerBurger.classList.add('header__burger');
headerBurger.innerHTML = `
    <svg viewBox="0 0 80 60" width="40" height="40">
        <line x1="4" y1="0" x2="76" y2="0"></line>
        <line x1="4" y1="25" x2="76" y2="25"></line>
        <line x1="4" y1="25" x2="76" y2="25"></line>
        <line x1="4" y1="50" x2="76" y2="50"></line>
    </svg>
`;
headerBurger.addEventListener("click", openMenu);
document.addEventListener('keydown', closeMenu);

const h1 = document.createElement('h1');
h1.textContent = 'English for kids';

const headerSwitch = document.createElement('div');
headerSwitch.classList.add('header__switch');
headerSwitch.classList.add('checked');
headerSwitch.innerHTML = `
    <span>train</span>
    <div class="header__switch-round"></div>
    <span>play</span>
`;
headerSwitch.addEventListener("click", switchMode);

headerContainer.appendChild(headerBurger);
headerContainer.appendChild(h1);
headerContainer.appendChild(headerSwitch);
header.appendChild(headerContainer);
document.body.appendChild(header);

// !!! MENU VIEW !!!
// !!! MENU VIEW !!!
// !!! MENU VIEW !!!

const menu = document.createElement('section');
menu.classList.add('menu');

menuArray.forEach((el, i) => {
  const DOMel = document.createElement('div');
  DOMel.classList.add('menu__part');
  if (i === 0) DOMel.classList.add('menu__part_choosed');
  DOMel.id = el.id;
  DOMel.innerText = el.innerText;
  DOMel.addEventListener('click', chooseMenuPart);
  menu.appendChild(DOMel);
});

document.body.appendChild(menu);
menu.style.top = `${header.offsetHeight}px`;


document.querySelector('h1').addEventListener('click', switchToMainPage);
document.getElementById('main_page_btn').addEventListener('click', switchToMainPage);
document.getElementById('actiona_page_btn').addEventListener('click', switchToActionAPage);
document.getElementById('actionb_page_btn').addEventListener('click', switchToActionBPage);
document.getElementById('actionc_page_btn').addEventListener('click', switchToActionCPage);
document.getElementById('animala_page_btn').addEventListener('click', switchToAnimalPage);
document.getElementById('clothes_page_btn').addEventListener('click', switchToClothesPage);

document.getElementById('main_page_btn').classList.add('menu__part_onclick');
document.getElementById('actiona_page_btn').classList.add('menu__part_onclick');
document.getElementById('actionb_page_btn').classList.add('menu__part_onclick');
document.getElementById('actionc_page_btn').classList.add('menu__part_onclick');

document.getElementById('animala_page_btn').classList.add('menu__part_onclick');
document.getElementById('clothes_page_btn').classList.add('menu__part_onclick');


export {
  header, menu, headerBurger, headerSwitch,
};
