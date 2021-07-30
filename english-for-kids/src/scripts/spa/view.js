import { header } from '../header/view';
import rotateSvg from '../../assets/imgs/rotate.svg';
import { SPAState, wordsObj, setSPAState } from './model';

// !!! VIEW !!!
// !!! VIEW !!!
// !!! VIEW !!!

export const mainDOM = document.createElement('main');
mainDOM.classList.add('main');
const mainContainer = document.createElement('div');
mainContainer.classList.add('container');

mainDOM.appendChild(mainContainer);
document.body.appendChild(mainDOM);

document.querySelector('main.main').style.top = `${header.offsetHeight}px`;

export function switchToStateFromURLHash() {
  // console.log(SPAState);
  const URLHash = window.location.hash;

  const stateJSON = decodeURIComponent(URLHash.substr(1));

  const container = document.querySelector('main.main div.container');

  if (stateJSON != '') {
    setSPAState(JSON.parse(stateJSON));
  } else {
    setSPAState(wordsObj.main);
  }

  // !!! VIEW !!!
  // !!! VIEW !!!
  // !!! VIEW !!!

  let pageHTML = '';
  // console.log(SPAState);

  switch (SPAState.pagename) {
    case 'Main':
      pageHTML += layoutMainPage();
      break;

    case 'ActionA':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'ActionB':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'ActionC':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'Adjective':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'AnimalA':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'Clothes':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;
  }

  container.innerHTML = pageHTML;
}

// !!! VIEW !!!
// !!! VIEW !!!
// !!! VIEW !!!

function layoutMainPage() {
  let cardImg = '';
  let englishWord = '';
  let card = '';
  let result = '';

  for (const key in wordsObj.main) {
    if (typeof wordsObj.main[key] === 'string') continue;
    cardImg = wordsObj.main[key].image;
    englishWord = wordsObj.main[key].englishWord;
    card = `
          <div class="main__card">
              <img src="${cardImg}" alt="${englishWord}" title="${englishWord}" class="main__card-img">
              <div class="main__card-description">
                  <span id="main__word">${key}</span>
              </div>
          </div>`;

    result += card;
  }

  return result;
}

function layoutCardPage(keyArg) {
  let cardImg = '';
  let englishWord = '';
  let card = '';
  let result = '';

  // console.log(wordsObj[keyArg]);

  for (const key in wordsObj[keyArg]) {
    if (typeof wordsObj[keyArg][key] === 'string') continue;
    cardImg = wordsObj[keyArg][key].image;
    englishWord = wordsObj[keyArg][key].englishWord;

    card = `
          <div class="main__card">
              <img src="${cardImg}" alt="${englishWord}" title="${englishWord}" class="main__card-img">
              <div class="main__card-description cardpage__card-description">
                  <span id="main__word">${key}</span>
                  <img src="${rotateSvg}" alt="rotate" title="rotate" class="main__card-rotate">
              </div>
          </div>`;

    result += card;
  }

  return result;
}
