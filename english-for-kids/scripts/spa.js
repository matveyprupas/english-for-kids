"use strict";

window.onhashchange = switchToStateFromURLHash;

// !!! MODEL !!!
// !!! MODEL !!!
// !!! MODEL !!!

let SPAState = {};

let wordsObj = {
    action: {image:"hug.jpg", englishWord: "hug", russianWord: "обнимашки", audio: "hug.mp3"},
}

function switchToStateFromURLHash () {
    let URLHash = window.location.hash;
    console.log(URLHash);
}