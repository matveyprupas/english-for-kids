import { header } from '../header/view';
import rotateSvg from '../../assets/imgs/rotate.svg';
import { SPAState, wordsObj, setSPAState } from './model';
import { addEventListenersToCards } from './ctrl';

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

    case 'AnimalB':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'Clothes':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;

    case 'Emotion':
      pageHTML += layoutCardPage(SPAState.pagename.toLowerCase());
      break;
  }

  container.innerHTML = pageHTML;
  addEventListenersToCards();
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
  let russianWord = '';
  let card = '';
  let result = '';

  // console.log(wordsObj[keyArg]);

  for (const key in wordsObj[keyArg]) {
    if (typeof wordsObj[keyArg][key] === 'string') continue;
    cardImg = wordsObj[keyArg][key].image;
    englishWord = wordsObj[keyArg][key].englishWord;
    russianWord = wordsObj[keyArg][key].russianWord;

    card = `
          <div class="word__card">
              <img src="${cardImg}" alt="${englishWord}" title="${englishWord}" class="word__card-img">
              <div class="word__card-description cardpage__card-description">
                  <span class="english__word">${key}</span>
                  <span class="russian__word">${russianWord}</span>

                  <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400" class="word__card-rotate"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>
                  
              </div>
          </div>`;

    result += card;
  }

  return result;
}
