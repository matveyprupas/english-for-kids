import bootImg from '../../assets/imgs/boot.jpg';
import chickImg from '../../assets/imgs/chick.jpg';
import danceImg from '../../assets/imgs/dance.jpg';
import diveImg from '../../assets/imgs/dive.jpg';
import dressImg from '../../assets/imgs/dress.jpg';
import hugImg from '../../assets/imgs/hug.jpg';
import pigImg from '../../assets/imgs/pig.jpg';
import sheepImg from '../../assets/imgs/sheep.jpg';
import shirtImg from '../../assets/imgs/shirt.jpg';
import dolphinImg from '../../assets/imgs/dolphin.jpg';
import angryImg from '../../assets/imgs/angry.jpg';
import jumpImg from '../../assets/imgs/jump.jpg';
import drawImg from '../../assets/imgs/draw.jpg';
import flyImg from '../../assets/imgs/fly.jpg';
import cryImg from '../../assets/imgs/cry.jpg';
import walkImg from '../../assets/imgs/walk.jpg';
import squidImg from '../../assets/imgs/squid.jpg';
import fishingImg from '../../assets/imgs/fishing.jpg';

// Action B

import skipImg from '../../assets/imgs/skip.jpg';
import singImg from '../../assets/imgs/sing.jpg';
import runImg from '../../assets/imgs/run.jpg';
import rideImg from '../../assets/imgs/ride.jpg';
import pointImg from '../../assets/imgs/point.jpg';
import openImg from '../../assets/imgs/open.jpg';
import playImg from '../../assets/imgs/play.jpg';
import sleepImg from '../../assets/imgs/sleep.jpg';
import swimImg from '../../assets/imgs/swim.jpg';

// Action C

import driveImg from '../../assets/imgs/drive.jpg';
import catchImg from '../../assets/imgs/catch.jpg';
import argueImg from '../../assets/imgs/argue.jpg';
import pushImg from '../../assets/imgs/push.jpg';
import pullImg from '../../assets/imgs/pull.jpg';
import dropImg from '../../assets/imgs/drop.jpg';
import carryImg from '../../assets/imgs/carry.jpg';
import readImg from '../../assets/imgs/read.jpg';
import buildImg from '../../assets/imgs/build.jpg';

// Adjective

import slowImg from '../../assets/imgs/slow.jpg';
import fastImg from '../../assets/imgs/fast.jpg';
import friendlyImg from '../../assets/imgs/friendly.jpg';
import unfriendlyImg from '../../assets/imgs/unfriendly.jpg';
import youngImg from '../../assets/imgs/young.jpg';
import oldImg from '../../assets/imgs/old.jpg';
import bigImg from '../../assets/imgs/big.jpg';
import smallImg from '../../assets/imgs/small.jpg';

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
    fishing: {
      image: fishingImg, englishWord: 'fishing', russianWord: 'рыбачить', audio: 'fishing.mp3',
    },
  },
  actionb: {
    pagename: 'ActionB',
    skip: {
      image: skipImg, englishWord: 'skip', russianWord: 'прыгать', audio: 'skip.mp3',
    },
    sing: {
      image: singImg, englishWord: 'sing', russianWord: 'петь', audio: 'sing.mp3',
    },
    run: {
      image: runImg, englishWord: 'run', russianWord: 'бегать', audio: 'run.mp3',
    },
    ride: {
      image: rideImg, englishWord: 'ride', russianWord: 'ездить', audio: 'ride.mp3',
    },
    point: {
      image: pointImg, englishWord: 'point', russianWord: 'показывать', audio: 'point.mp3',
    },
    open: {
      image: openImg, englishWord: 'open', russianWord: 'открывать', audio: 'open.mp3',
    },
    play: {
      image: playImg, englishWord: 'play', russianWord: 'играть', audio: 'play.mp3',
    },
    sleep: {
      image: sleepImg, englishWord: 'sleep', russianWord: 'спать', audio: 'sleep.mp3',
    },
    swim: {
      image: swimImg, englishWord: 'swim', russianWord: 'плавать', audio: 'swim.mp3',
    },
  },
  actionc: {
    pagename: 'ActionC',
    drive: {
      image: driveImg, englishWord: 'drive', russianWord: 'водить', audio: 'drive.mp3',
    },
    catch: {
      image: catchImg, englishWord: 'catch', russianWord: 'хватать', audio: 'catch.mp3',
    },
    argue: {
      image: argueImg, englishWord: 'argue', russianWord: 'спорить', audio: 'argue.mp3',
    },
    push: {
      image: pushImg, englishWord: 'push', russianWord: 'толкать', audio: 'push.mp3',
    },
    pull: {
      image: pullImg, englishWord: 'pull', russianWord: 'тянуть', audio: 'pull.mp3',
    },
    drop: {
      image: dropImg, englishWord: 'drop', russianWord: 'падать', audio: 'drop.mp3',
    },
    carry: {
      image: carryImg, englishWord: 'carry', russianWord: 'заботиться', audio: 'carry.mp3',
    },
    read: {
      image: readImg, englishWord: 'read', russianWord: 'читать', audio: 'read.mp3',
    },
    build: {
      image: buildImg, englishWord: 'build', russianWord: 'строить', audio: 'build.mp3',
    },
  },
  adjective: {
    pagename: 'Adjective',
    slow: {
      image: slowImg, englishWord: 'slow', russianWord: 'водить', audio: 'slow.mp3',
    },
    fast: {
      image: fastImg, englishWord: 'fast', russianWord: 'хватать', audio: 'fast.mp3',
    },
    friendly: {
      image: friendlyImg, englishWord: 'friendly', russianWord: 'спорить', audio: 'friendly.mp3',
    },
    unfriendly: {
      image: unfriendlyImg, englishWord: 'unfriendly', russianWord: 'толкать', audio: 'unfriendly.mp3',
    },
    young: {
      image: youngImg, englishWord: 'young', russianWord: 'тянуть', audio: 'young.mp3',
    },
    old: {
      image: oldImg, englishWord: 'old', russianWord: 'падать', audio: 'old.mp3',
    },
    big: {
      image: bigImg, englishWord: 'big', russianWord: 'заботиться', audio: 'big.mp3',
    },
    small: {
      image: smallImg, englishWord: 'small', russianWord: 'читать', audio: 'small.mp3',
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
