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

    if(burger.classList.length > 1) {
        // lineArray[0].setAttribute("y2", "50");
        // lineArray[2].setAttribute("y2", "00");
    } else {
        // lineArray[0].setAttribute("y2", "0");
        // lineArray[2].setAttribute("y2", "50");
    }
    // lineArray[0].style.opacity = 0;
    

    // lineArray[0].setAttribute();
    // console.log(lineArray);
}