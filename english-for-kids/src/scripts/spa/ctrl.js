import { chooseMenuPart, closeMenuWithoutEvent } from '../header/ctrl';
import { switchToStateFromURLHash } from './view';

function switchToState(newState) {
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
  // console.log(mainCardArr, wordCardArr);
  chooseMenuPart();
}

function playWordAudio() {
  console.log('playWordAudio!');
}

function rotateCard() {
  console.log('rotate!');
}

export {
  switchToMainPage, switchToActionAPage, switchToActionBPage, switchToActionCPage, switchToAnimalAPage, switchToAnimalBPage, switchToClothesPage, switchToAdjectivePage, switchToEmotionPage, playWordAudio, rotateCard, addEventListenersToCards,
};
