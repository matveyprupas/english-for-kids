import bootImg from '../../assets/imgs/boot.jpg';
import buildImg from '../../assets/imgs/build.jpg';
import chickImg from '../../assets/imgs/chick.jpg';
import danceImg from '../../assets/imgs/dance.jpg';
import diveImg from '../../assets/imgs/dive.jpg';
import dressImg from '../../assets/imgs/dress.jpg';
import hugImg from '../../assets/imgs/hug.jpg';
import pigImg from '../../assets/imgs/pig.jpg';
import sheepImg from '../../assets/imgs/sheep.jpg';
import shirtImg from '../../assets/imgs/shirt.jpg';
import swimImg from '../../assets/imgs/swim.jpg';
import youngImg from '../../assets/imgs/young.jpg';
import dolphinImg from '../../assets/imgs/dolphin.jpg';
import angryImg from '../../assets/imgs/angry.jpg';
import jumpImg from '../../assets/imgs/jump.jpg';
import drawImg from '../../assets/imgs/draw.jpg';
import flyImg from '../../assets/imgs/fly.jpg';
import cryImg from '../../assets/imgs/cry.jpg';
import walkImg from '../../assets/imgs/walk.jpg';
import squidImg from '../../assets/imgs/squid.jpg';

// !!! MODEL !!!
// !!! MODEL !!!
// !!! MODEL !!!

export var SPAState = {};

export function setSPAState(obj) {
  SPAState = obj;
}

export const wordsObj = {
  main: {
    pagename: 'Main',
    'Action (set A)': {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    'Action (set B)': {
      image: swimImg, englishWord: 'swim', russianWord: 'плавать', audio: 'swim.mp3',
    },
    'Action (set C)': {
      image: buildImg, englishWord: 'build', russianWord: 'строить', audio: 'build.mp3',
    },
    Adjective: {
      image: youngImg, englishWord: 'young', russianWord: 'молодой', audio: 'young.mp3',
    },
    'Animal (set A)': {
      image: sheepImg, englishWord: 'sheep', russianWord: 'овечечка', audio: 'sheep.mp3',
    },
    'Animal (set B)': {
      image: dolphinImg, englishWord: 'dolphin', russianWord: 'дельфинушка', audio: 'dolphin.mp3',
    },
    Clothes: {
      image: shirtImg, englishWord: 'shirt', russianWord: 'рубаха', audio: 'shirt.mp3',
    },
    Emotions: {
      image: angryImg, englishWord: 'angry', russianWord: 'злость', audio: 'angry.mp3',
    },
    Food: {
      image: squidImg, englishWord: 'squid', russianWord: 'осьминог', audio: 'squid.mp3',
    },
  },
  actiona: {
    pagename: 'ActionA',
    hug: {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    dive: {
      image: diveImg, englishWord: 'dive', russianWord: 'нырять', audio: 'dive.mp3',
    },
    dance: {
      image: danceImg, englishWord: 'dance', russianWord: 'танцевать', audio: 'dance.mp3',
    },
    jump: {
      image: jumpImg, englishWord: 'jump', russianWord: 'прыгать', audio: 'jump.mp3',
    },
    draw: {
      image: drawImg, englishWord: 'draw', russianWord: 'рисовать', audio: 'dance.mp3',
    },
    fly: {
      image: flyImg, englishWord: 'fly', russianWord: 'летать', audio: 'fly.mp3',
    },
    cry: {
      image: cryImg, englishWord: 'cry', russianWord: 'плакать', audio: 'cry.mp3',
    },
    walk: {
      image: walkImg, englishWord: 'walk', russianWord: 'ходить', audio: 'walk.mp3',
    },
  },
  actionb: {
    pagename: 'ActionB',
    hug: {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: 'hug.mp3',
    },
    dive: {
      image: diveImg, englishWord: 'dive', russianWord: 'нырять', audio: 'dive.mp3',
    },
    dance: {
      image: danceImg, englishWord: 'dance', russianWord: 'танцевать', audio: 'dance.mp3',
    },
    jump: {
      image: jumpImg, englishWord: 'jump', russianWord: 'прыгать', audio: 'jump.mp3',
    },
    draw: {
      image: drawImg, englishWord: 'draw', russianWord: 'рисовать', audio: 'dance.mp3',
    },
    fly: {
      image: flyImg, englishWord: 'fly', russianWord: 'летать', audio: 'fly.mp3',
    },
    cry: {
      image: cryImg, englishWord: 'cry', russianWord: 'плакать', audio: 'cry.mp3',
    },
    walk: {
      image: walkImg, englishWord: 'walk', russianWord: 'ходить', audio: 'walk.mp3',
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
