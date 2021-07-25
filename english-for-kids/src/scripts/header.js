"use strict";


// !!! HEADER VIEW !!!
// !!! HEADER VIEW !!!
// !!! HEADER VIEW !!!

let header = document.createElement("header");
header.classList.add("header");
let header__container = document.createElement("div");
header__container.classList.add("container");

let header__burger = document.createElement("div");
header__burger.classList.add("header__burger");
header__burger.innerHTML = `
    <svg viewBox="0 0 80 60" width="40" height="40">
        <line x1="4" y1="0" x2="76" y2="0"></line>
        <line x1="4" y1="25" x2="76" y2="25"></line>
        <line x1="4" y1="25" x2="76" y2="25"></line>
        <line x1="4" y1="50" x2="76" y2="50"></line>
    </svg>
`;

let h1 = document.createElement("h1");
h1.textContent = "English for kids";

let header__switch = document.createElement("div");
header__switch.classList.add("header__switch");
header__switch.classList.add("checked");
header__switch.innerHTML = `
    <span>train</span>
    <div class="header__switch-round"></div>
    <span>play</span>
`;

header__container.appendChild(header__burger);
header__container.appendChild(h1);
header__container.appendChild(header__switch);
header.appendChild(header__container);
document.body.appendChild(header);
// console.log(header);


// !!! MENU MODEL !!!
// !!! MENU MODEL !!!
// !!! MENU MODEL !!!

let menuArray = [
    {
        innerText: "Main page",
        id: "main_page_btn"
    }, 
    {
        innerText: "Action (set A)",
        id: "actiona_page_btn"
    }, 
    {
        innerText: "Action (set B)",
        id: "actionb_page_btn"
    }, 
    {
        innerText: "Action (set C)",
        id: "actionc_page_btn"
    }, 
    {
        innerText: "Adjective",
        id: "adjective_page_btn"
    }, 
    {
        innerText: "Animal (set A)",
        id: "animala_page_btn"
    }, 
    {
        innerText: "Animal (set B)",
        id: "animalb_page_btn"
    }, 
    {
        innerText: "Clothes",
        id: "clothes_page_btn"
    }, 
    {
        innerText: "Emotion",
        id: "emotion_page_btn"
    }, 
    {
        innerText: "Statistics",
        id: "statistics_page_btn"
    }, 
    
]; 

{/* <section class="menu">
    <div class="menu__part menu__part_choosed" id="main_page_btn">Main page</div>
    <div class="menu__part" id="actiona_page_btn">Action (set A)</div>
    <div class="menu__part" id="actionb_page_btn">Action (set B)</div>
    <div class="menu__part" id="actionc_page_btn">Action (set C)</div>
    <div class="menu__part" id="adjective_page_btn">Adjective</div>
    <div class="menu__part" id="animala_page_btn">Animal (set A)</div>
    <div class="menu__part" id="animalb_page_btn">Animal (set B)</div>
    <div class="menu__part" id="clothes_page_btn">Clothes</div>
    <div class="menu__part" id="emotion_page_btn">Emotion</div>
    <div class="menu__part" id="statistics_page_btn">Statistics</div>
</section> */}

// !!! MENU VIEW !!!
// !!! MENU VIEW !!!
// !!! MENU VIEW !!!


let menuCreate = document.createElement("section");
menuCreate.classList.add("menu");


menuArray.forEach( (el, i) => {
    let DOMel = document.createElement("div");
    DOMel.classList.add("menu__part");
    if (i === 0) DOMel.classList.add("menu__part_choosed");
    DOMel.id = el.id;
    DOMel.innerText = el.innerText;
    menuCreate.appendChild(DOMel);
} );



// let header__container = document.createElement("div");
// header__container.classList.add("container");

// let header__burger = document.createElement("div");
// header__burger.classList.add("header__burger");
// header__burger.innerHTML = `
//     <svg viewBox="0 0 80 60" width="40" height="40">
//         <line x1="4" y1="0" x2="76" y2="0"></line>
//         <line x1="4" y1="25" x2="76" y2="25"></line>
//         <line x1="4" y1="25" x2="76" y2="25"></line>
//         <line x1="4" y1="50" x2="76" y2="50"></line>
//     </svg>
// `;

// let h1 = document.createElement("h1");
// h1.textContent = "English for kids";

// let header__switch = document.createElement("div");
// header__switch.classList.add("header__switch");
// header__switch.classList.add("checked");
// header__switch.innerHTML = `
//     <span>train</span>
//     <div class="header__switch-round"></div>
//     <span>play</span>
// `;

// header__container.appendChild(header__burger);
// header__container.appendChild(h1);
// header__container.appendChild(header__switch);
// header.appendChild(header__container);
document.body.appendChild(menuCreate);
console.log(menuCreate);





// let header = document.querySelector("header.header");
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

// export {header};
