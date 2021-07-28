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

function switchToAnimalPage() {
  switchToState({ pagename: 'AnimalA' });
}

function switchToClothesPage() {
  switchToState({ pagename: 'Clothes' });
}

window.onhashchange = switchToStateFromURLHash;

export {
  switchToMainPage, switchToActionAPage, switchToActionBPage, switchToActionCPage, switchToAnimalPage, switchToClothesPage,
};
