import { closeMenuWithoutEvent } from '../header/ctrl';
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

function switchToEmotionsPage() {
  switchToState({ pagename: 'Emotions' });
}

window.onhashchange = switchToStateFromURLHash;

export {
  switchToMainPage, switchToActionAPage, switchToActionBPage, switchToActionCPage, switchToAnimalAPage, switchToAnimalBPage, switchToClothesPage, switchToAdjectivePage, switchToEmotionsPage,
};
