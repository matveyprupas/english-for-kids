let switchBtn = document.querySelector("div.header__switch");
switchBtn.addEventListener("click", switchMode);

function switchMode (e) {
    let text = switchBtn.querySelector("span");
    let round = switchBtn.querySelector("div.header__switch-round");

    switchBtn.classList.toggle("checked");
    
    console.log(switchBtn, text, round);
}