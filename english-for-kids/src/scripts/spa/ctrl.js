import { chooseMenuPart, closeMenuWithoutEvent } from '../header/ctrl';
import { switchToStateFromURLHash } from './view';
import { wordsObj } from './model';

let pageCurrantName = 'Main';

function switchToState(newState) {
  pageCurrantName = newState.pagename;
  window.location.hash = encodeURIComponent(JSON.stringify(newState));
  closeMenuWithoutEvent();
}

function switchToMainPage() {
  switchToState({ pagename: 'Main' });
}

function switchToActionAPage() {
  switchToState({ pagename: 'ActionA' });
}

function switchToActionBPage() {
  switchToState({ pagename: 'ActionB' });
}

function switchToActionCPage() {
  switchToState({ pagename: 'ActionC' });
}

function switchToAdjectivePage() {
  switchToState({ pagename: 'Adjective' });
}

function switchToAnimalAPage() {
  switchToState({ pagename: 'AnimalA' });
}

function switchToAnimalBPage() {
  switchToState({ pagename: 'AnimalB' });
}

function switchToClothesPage() {
  switchToState({ pagename: 'Clothes' });
}

function switchToEmotionPage() {
  switchToState({ pagename: 'Emotion' });
}

window.onhashchange = switchToStateFromURLHash;

// Actions with cards

function addEventListenersToCards() {
  const mainCardArr = document.querySelectorAll('.main__card');
  const wordCardArr = document.querySelectorAll('.word__card');
  const cardPageArr = [
    switchToActionAPage,
    switchToActionBPage,
    switchToActionCPage,
    switchToAdjectivePage,
    switchToAnimalAPage,
    switchToAnimalBPage,
    switchToClothesPage,
    switchToEmotionPage,
  ];

  mainCardArr.forEach((el, i) => el.addEventListener('click', cardPageArr[i]));
  wordCardArr.forEach((el) => el.addEventListener('click', playWordAudio));

  chooseMenuPart();
}

function playWordAudio(e) {
  if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
    rotateCard(e);
    return;
  }
  let target = e.target;
  
  while (target.className !== "word__card") {
    target = target.parentNode;
  }
  let word = target.querySelector(".english__word").textContent;
  let audioScr = wordsObj[pageCurrantName.toLocaleLowerCase()][word].audio;
  let audio = new Audio(audioScr);
  audio.play();
  // console.log(audio);
}

function rotateCard(e) {
  let rotateTarget = e.target.parentNode;

  while (rotateTarget.className !== 'word__card') {
    rotateTarget = rotateTarget.parentNode;
  }
  rotateTarget.addEventListener('mouseout', rotateCardBack);

  rotateTarget.classList.add('word__card_is-rotated');
  // console.log(rotateTarget.querySelector("#main_word"));
}

function rotateCardBack() {
  this.classList.remove('word__card_is-rotated');
  this.removeEventListener('mouseout', rotateCardBack);
  // console.log('rotate BACK!');
}

export {
  switchToMainPage, switchToActionAPage, switchToActionBPage, switchToActionCPage, switchToAnimalAPage, switchToAnimalBPage, switchToClothesPage, switchToAdjectivePage, switchToEmotionPage, playWordAudio, rotateCard, addEventListenersToCards,
};
