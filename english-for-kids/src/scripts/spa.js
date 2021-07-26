import { header, closeMenuWithoutEvent } from './header';
import bootImg from '../assets/imgs/boot.jpg';
import buildImg from '../assets/imgs/build.jpg';
import chickImg from '../assets/imgs/chick.jpg';
import danceImg from '../assets/imgs/dance.jpg';
import diveImg from '../assets/imgs/dive.jpg';
import dressImg from '../assets/imgs/dress.jpg';
import hugImg from '../assets/imgs/hug.jpg';
import pigImg from '../assets/imgs/pig.jpg';
import rotateSvg from '../assets/imgs/rotate.svg';
import sheepImg from '../assets/imgs/sheep.jpg';
import shirtImg from '../assets/imgs/shirt.jpg';
import swimImg from '../assets/imgs/swim.jpg';
import youngImg from '../assets/imgs/young.jpg';

window.onhashchange = switchToStateFromURLHash;

// !!! VIEW !!!
// !!! VIEW !!!
// !!! VIEW !!!

export const mainDOM = document.createElement('main');
mainDOM.classList.add('main');
const main__container = document.createElement('div');
main__container.classList.add('container');

mainDOM.appendChild(main__container);
document.body.appendChild(mainDOM);

document.querySelector('main.main').style.top = `${header.offsetHeight}px`;

// !!! MODEL !!!
// !!! MODEL !!!
// !!! MODEL !!!

let SPAState = {};

const wordsObj = {
  main: {
    pagename: 'Main',
    'Action (set A)': {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    'Animal (set A)': {
      image: sheepImg, englishWord: 'sheep', russianWord: 'овечечка', audio: 'sheep.mp3',
    },
    Clothes: {
      image: shirtImg, englishWord: 'shirt', russianWord: 'рубаха', audio: 'shirt.mp3',
    },
    'Action (set B)': {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    'Animal (set B)': {
      image: sheepImg, englishWord: 'sheep', russianWord: 'овечечка', audio: 'sheep.mp3',
    },
    Emotions: {
      image: shirtImg, englishWord: 'shirt', russianWord: 'рубаха', audio: 'shirt.mp3',
    },
  },
  actiona: {
    pagename: 'Action',
    hug: {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    dive: {
      image: diveImg, englishWord: 'dive', russianWord: 'нырять', audio: 'dive.mp3',
    },
    dance: {
      image: danceImg, englishWord: 'dance', russianWord: 'танцевать', audio: 'dance.mp3',
    },
    dive2: {
      image: diveImg, englishWord: 'dive', russianWord: 'нырять', audio: 'dive.mp3',
    },
    dance2: {
      image: danceImg, englishWord: 'dance', russianWord: 'танцевать', audio: 'dance.mp3',
    },
  },
  animala: {
    pagename: 'Animal',
    sheep: {
      image: sheepImg, englishWord: 'sheep', russianWord: 'овечечка', audio: 'sheep.mp3',
    },
    chick: {
      image: chickImg, englishWord: 'chick', russianWord: 'цыпа', audio: 'chick.mp3',
    },
    pig: {
      image: pigImg, englishWord: 'pig', russianWord: 'свинотка', audio: 'pig.mp3',
    },
    chick2: {
      image: chickImg, englishWord: 'chick', russianWord: 'цыпа', audio: 'chick.mp3',
    },
    pig2: {
      image: pigImg, englishWord: 'pig', russianWord: 'свинотка', audio: 'pig.mp3',
    },
  },
  clothes: {
    pagename: 'Clothes',
    shirt: {
      image: shirtImg, englishWord: 'shirt', russianWord: 'рубаха', audio: 'shirt.mp3',
    },
    dress: {
      image: dressImg, englishWord: 'dress', russianWord: 'то, чего всегда мало', audio: 'dress.mp3',
    },
    boot: {
      image: bootImg, englishWord: 'boot', russianWord: 'боты', audio: 'boot.mp3',
    },
    dress2: {
      image: dressImg, englishWord: 'dress', russianWord: 'то, чего всегда мало', audio: 'dress.mp3',
    },
    boot2: {
      image: bootImg, englishWord: 'boot', russianWord: 'боты', audio: 'boot.mp3',
    },
  },
};

export function switchToStateFromURLHash() {
  const URLHash = window.location.hash;

  const stateJSON = decodeURIComponent(URLHash.substr(1));

  const container = document.querySelector('main.main div.container');

  if (stateJSON != '') {
    SPAState = JSON.parse(stateJSON);
  } else {
    SPAState = wordsObj.main;
  }

  // !!! VIEW !!!
  // !!! VIEW !!!
  // !!! VIEW !!!

  let pageHTML = '';

  switch (SPAState.pagename) {
    case 'Main':
      pageHTML += layoutMainPage();
      break;

    case 'ActionA':
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

function switchToState(newState) {
  window.location.hash = encodeURIComponent(JSON.stringify(newState));
  closeMenuWithoutEvent();
}

function switchToMainPage() {
  switchToState({ pagename: 'Main' });
}

function switchToActionPage() {
  switchToState({ pagename: 'ActionA' });
}

function switchToAnimalPage() {
  switchToState({ pagename: 'AnimalA' });
}

function switchToClothesPage() {
  switchToState({ pagename: 'Clothes' });
}

document.querySelector('h1').addEventListener('click', switchToMainPage);
document.getElementById('main_page_btn').addEventListener('click', switchToMainPage);
document.getElementById('actiona_page_btn').addEventListener('click', switchToActionPage);
document.getElementById('animala_page_btn').addEventListener('click', switchToAnimalPage);
document.getElementById('clothes_page_btn').addEventListener('click', switchToClothesPage);
document.getElementById('main_page_btn').classList.add('menu__part_onclick');
document.getElementById('actiona_page_btn').classList.add('menu__part_onclick');
document.getElementById('animala_page_btn').classList.add('menu__part_onclick');
document.getElementById('clothes_page_btn').classList.add('menu__part_onclick');

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
