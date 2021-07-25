"use strict";

window.onhashchange = switchToStateFromURLHash;

// !!! VIEW !!!
// !!! VIEW !!!
// !!! VIEW !!!

let mainDOM = document.createElement("main");
mainDOM.classList.add("main");
let main__container = document.createElement("div");
main__container.classList.add("container");

mainDOM.appendChild(main__container);
document.body.appendChild(mainDOM);

document.querySelector("main.main").style.top = header.offsetHeight + "px";

// !!! MODEL !!!
// !!! MODEL !!!
// !!! MODEL !!!

let SPAState = {};

let wordsObj = {
    main: {
        pagename: "Main",
        "Action (set A)": {image:"hug.jpg", englishWord: "hug", russianWord: "обнимашки", audio: "hug.mp3"},
        "Animal (set A)": {image:"sheep.jpg", englishWord: "sheep", russianWord: "овечечка", audio: "sheep.mp3"},
        Clothes: {image:"shirt.jpg", englishWord: "shirt", russianWord: "рубаха", audio: "shirt.mp3"},
        "Action (set B)": {image:"hug.jpg", englishWord: "hug", russianWord: "обнимашки", audio: "hug.mp3"},
        "Animal (set B)": {image:"sheep.jpg", englishWord: "sheep", russianWord: "овечечка", audio: "sheep.mp3"},
        Emotions: {image:"shirt.jpg", englishWord: "shirt", russianWord: "рубаха", audio: "shirt.mp3"},
    },
    actiona: {
        pagename: "Action",
        hug: {image:"hug.jpg", englishWord: "hug", russianWord: "обнимашки", audio: "hug.mp3"},
        dive: {image:"dive.jpg", englishWord: "dive", russianWord: "нырять", audio: "dive.mp3"},
        dance: {image:"dance.jpg", englishWord: "dance", russianWord: "танцевать", audio: "dance.mp3"},
        dive2: {image:"dive.jpg", englishWord: "dive", russianWord: "нырять", audio: "dive.mp3"},
        dance2: {image:"dance.jpg", englishWord: "dance", russianWord: "танцевать", audio: "dance.mp3"},
    },
    animala: {
        pagename: "Animal",
        sheep: {image:"sheep.jpg", englishWord: "sheep", russianWord: "овечечка", audio: "sheep.mp3"},
        chick: {image:"chick.jpg", englishWord: "chick", russianWord: "цыпа", audio: "chick.mp3"},
        pig: {image:"pig.jpg", englishWord: "pig", russianWord: "свинотка", audio: "pig.mp3"},
        chick2: {image:"chick.jpg", englishWord: "chick", russianWord: "цыпа", audio: "chick.mp3"},
        pig2: {image:"pig.jpg", englishWord: "pig", russianWord: "свинотка", audio: "pig.mp3"},
    },
    clothes: {
        pagename: "Clothes",
        shirt: {image:"shirt.jpg", englishWord: "shirt", russianWord: "рубаха", audio: "shirt.mp3"},
        dress: {image:"dress.jpg", englishWord: "dress", russianWord: "то, чего всегда мало", audio: "dress.mp3"},
        boot: {image:"boot.jpg", englishWord: "boot", russianWord: "боты", audio: "boot.mp3"},
        dress2: {image:"dress.jpg", englishWord: "dress", russianWord: "то, чего всегда мало", audio: "dress.mp3"},
        boot2: {image:"boot.jpg", englishWord: "boot", russianWord: "боты", audio: "boot.mp3"},
    },
};

function switchToStateFromURLHash () {
    let URLHash = window.location.hash;

    let stateJSON = decodeURIComponent(URLHash.substr(1));

    let container = document.querySelector("main.main div.container");

    if(stateJSON != "") {
        SPAState = JSON.parse(stateJSON);
    } else {
        SPAState = wordsObj.main;
    }

    // !!! VIEW !!!
    // !!! VIEW !!!
    // !!! VIEW !!!

    let pageHTML = "";

    switch (SPAState.pagename) {
        case "Main":
            pageHTML += layoutMainPage();
            break;
    
        case "ActionA":
            pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
            break;

        case "AnimalA":
            pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
            break;

        case "Clothes":
            pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
            break;
    }

    container.innerHTML = pageHTML;
}

function switchToState (newState) {
    window.location.hash = encodeURIComponent(JSON.stringify(newState));
    closeMenuWithoutEvent();
}

function switchToMainPage () {
    switchToState ( {pagename: "Main"} );
}

function switchToActionPage () {
    switchToState ( {pagename: "ActionA"} );
}

function switchToAnimalPage () {
    switchToState ( {pagename: "AnimalA"} );
}

function switchToClothesPage () {
    switchToState ( {pagename: "Clothes"} );
}

document.querySelector("h1").addEventListener("click", switchToMainPage);
document.getElementById("main_page_btn").addEventListener("click", switchToMainPage);
document.getElementById("actiona_page_btn").addEventListener("click", switchToActionPage);
document.getElementById("animala_page_btn").addEventListener("click", switchToAnimalPage);
document.getElementById("clothes_page_btn").addEventListener("click", switchToClothesPage);
document.getElementById("main_page_btn").classList.add("menu__part_onclick");
document.getElementById("actiona_page_btn").classList.add("menu__part_onclick");
document.getElementById("animala_page_btn").classList.add("menu__part_onclick");
document.getElementById("clothes_page_btn").classList.add("menu__part_onclick");

// !!! VIEW !!!
// !!! VIEW !!!
// !!! VIEW !!!

function layoutMainPage () {
    let cardImg = "";
    let englishWord = "";
    let card = "";
    let result = "";

    for (let key in wordsObj.main) {
        if (typeof wordsObj.main[key] === "string") continue;
        cardImg = wordsObj.main[key].image;
        englishWord = wordsObj.main[key].englishWord;

        card = `
        <div class="main__card">
            <img src="./assets/imgs/${cardImg}" alt="${englishWord}" title="${englishWord}" class="main__card-img">
            <div class="main__card-description">
                <span id="main__word">${key}</span>
            </div>
        </div>`;

        result += card;
    }

    return result;
}

function layoutCardPage (keyArg) {
    let cardImg = "";
    let englishWord = "";
    let card = "";
    let result = "";

    console.log(wordsObj[keyArg]);

    for (let key in wordsObj[keyArg]) {
        if (typeof wordsObj[keyArg][key] === "string") continue;
        cardImg = wordsObj[keyArg][key].image;
        englishWord = wordsObj[keyArg][key].englishWord;

        card = `
        <div class="main__card">
            <img src="./assets/imgs/${cardImg}" alt="${englishWord}" title="${englishWord}" class="main__card-img">
            <div class="main__card-description cardpage__card-description">
                <span id="main__word">${key}</span>
                <img src="./assets/imgs/rotate.svg" alt="rotate" title="rotate" class="main__card-rotate">
            </div>
        </div>`;

        result += card;
    }

    return result;
}