let switchBtn = document.querySelector("div.header__switch");
switchBtn.addEventListener("click", switchMode);
let burger = document.querySelector("div.header__burger");
burger.addEventListener("click", openMenu);

function switchMode () {
    switchBtn.classList.toggle("checked");
}

function openMenu () {
    burger.classList.toggle("header__menu-opened");
    let lineArray = burger.querySelectorAll("line");
    // lineArray[1].style.opacity = 0;
    // lineArray[1].setAttribute("x", "40");

    // lineArray[0].setAttribute();
    console.log(lineArray);
}