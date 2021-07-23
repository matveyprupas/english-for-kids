"use strict";

let header = document.querySelector("header.header");
let switchBtn = document.querySelector("div.header__switch");
switchBtn.addEventListener("click", switchMode);
let burger = document.querySelector("div.header__burger");
burger.addEventListener("click", openMenu);
document.addEventListener("keydown", closeMenu);
let menuPart = document.querySelectorAll("div.menu__part");
menuPart.forEach( el => el.addEventListener("click", chooseMenuPart) );

let menu = document.querySelector(".menu");
menu.style.top = header.offsetHeight + "px";

function switchMode () {
    switchBtn.classList.toggle("checked");
}

function openMenu () {
    burger.classList.toggle("header__menu-opened");
    menu.classList.toggle("menu_opened");
}

function closeMenu (e) {
    if (e.code !== "Escape") return;
    burger.classList.remove("header__menu-opened");
    menu.classList.remove("menu_opened");
}

function closeMenuWithoutEvent () {
    burger.classList.remove("header__menu-opened");
    menu.classList.remove("menu_opened");
}

function chooseMenuPart (e) {
    menuPart.forEach( el => el.classList.remove("menu__part_choosed") );
    e.target.classList.add("menu__part_choosed");
}
