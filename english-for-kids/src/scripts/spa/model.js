// Action A

import hugImg from '../../assets/imgs/hug.jpg';
import diveImg from '../../assets/imgs/dive.jpg';
import danceImg from '../../assets/imgs/dance.jpg';
import jumpImg from '../../assets/imgs/jump.jpg';
import flyImg from '../../assets/imgs/fly.jpg';
import drawImg from '../../assets/imgs/draw.jpg';
import cryImg from '../../assets/imgs/cry.jpg';
import walkImg from '../../assets/imgs/walk.jpg';
import fishingImg from '../../assets/imgs/fishing.jpg';
import hugAudio from '../../assets/audio/hug.mp3';
import cryAudio from '../../assets/audio/cry.mp3';
import danceAudio from '../../assets/audio/dance.mp3';
import diveAudio from '../../assets/audio/dive.mp3';
import drawAudio from '../../assets/audio/draw.mp3';
import fishAudio from '../../assets/audio/fish.mp3';
import flyAudio from '../../assets/audio/fly.mp3';
import jumpAudio from '../../assets/audio/jump.mp3';

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

// AnimalA

import horseImg from '../../assets/imgs/horse.jpg';
import catImg from '../../assets/imgs/cat.jpg';
import chickenImg from '../../assets/imgs/chicken.jpg';
import rabbitImg from '../../assets/imgs/rabbit.jpg';
import dogImg from '../../assets/imgs/dog.jpg';
import chickImg from '../../assets/imgs/chick.jpg';
import pigImg from '../../assets/imgs/pig.jpg';
import sheepImg from '../../assets/imgs/sheep.jpg';

// AnimalB

import birdImg from '../../assets/imgs/bird.jpg';
import frogImg from '../../assets/imgs/frog.jpg';
import turtleImg from '../../assets/imgs/turtle.jpg';
import dolphinImg from '../../assets/imgs/dolphin.jpg';
import giraffeImg from '../../assets/imgs/giraffe.jpg';
import fishImg from '../../assets/imgs/fish.jpg';
import lionImg from '../../assets/imgs/lion.jpg';
import mouseImg from '../../assets/imgs/mouse.jpg';

// Clothes

import shoeImg from '../../assets/imgs/shoe.jpg';
import coatImg from '../../assets/imgs/coat.jpg';
import skirtImg from '../../assets/imgs/skirt.jpg';
import pantsImg from '../../assets/imgs/pants.jpg';
import blouseImg from '../../assets/imgs/blouse.jpg';
import dressImg from '../../assets/imgs/dress.jpg';
import bootImg from '../../assets/imgs/boot.jpg';
import shirtImg from '../../assets/imgs/shirt.jpg';

// Emotion

import scaredImg from '../../assets/imgs/scared.jpg';
import happyImg from '../../assets/imgs/happy.jpg';
import tiredImg from '../../assets/imgs/tired.jpg';
import sadImg from '../../assets/imgs/sad.jpg';
import surprisedImg from '../../assets/imgs/surprised.jpg';
import laughImg from '../../assets/imgs/laugh.jpg';
import smileImg from '../../assets/imgs/smile.jpg';
import angryImg from '../../assets/imgs/angry.jpg';

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
    Emotion: {
      image: angryImg, englishWord: 'angry', russianWord: 'злость', audio: 'angry.mp3',
    },
  },
  actiona: {
    pagename: 'ActionA',
    hug: {
      image: hugImg, englishWord: 'hug', russianWord: 'обнимашки', audio: hugAudio,
    },
    dive: {
      image: diveImg, englishWord: 'dive', russianWord: 'нырять', audio: diveAudio,
    },
    dance: {
      image: danceImg, englishWord: 'dance', russianWord: 'танцевать', audio: danceAudio,
    },
    jump: {
      image: jumpImg, englishWord: 'jump', russianWord: 'прыгать', audio: jumpAudio,
    },
    draw: {
      image: drawImg, englishWord: 'draw', russianWord: 'рисовать', audio: drawAudio,
    },
    fly: {
      image: flyImg, englishWord: 'fly', russianWord: 'летать', audio: flyAudio,
    },
    cry: {
      image: cryImg, englishWord: 'cry', russianWord: 'плакать', audio: cryAudio,
    },
    // walk: {
    //   image: walkImg, englishWord: 'walk', russianWord: 'ходить', audio: 'walk.mp3',
    // },
    fishing: {
      image: fishingImg, englishWord: 'fishing', russianWord: 'рыбачить', audio: fishAudio,
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
    horse: {
      image: horseImg, englishWord: 'horse', russianWord: 'лошадка', audio: 'horse.mp3',
    },
    cat: {
      image: catImg, englishWord: 'cat', russianWord: 'киска', audio: 'cat.mp3',
    },
    chicken: {
      image: chickenImg, englishWord: 'chicken', russianWord: 'курочка', audio: 'chicken.mp3',
    },
    rabbit: {
      image: rabbitImg, englishWord: 'rabbit', russianWord: 'клолик', audio: 'rabbit.mp3',
    },
    dog: {
      image: dogImg, englishWord: 'dog', russianWord: 'собачка', audio: 'dog.mp3',
    },
  },
  animalb: {
    pagename: 'Animal',
    bird: {
      image: birdImg, englishWord: 'bird', russianWord: 'овечечка', audio: 'bird.mp3',
    },
    frog: {
      image: frogImg, englishWord: 'frog', russianWord: 'цыпа', audio: 'frog.mp3',
    },
    turtle: {
      image: turtleImg, englishWord: 'turtle', russianWord: 'свинотка', audio: 'turtle.mp3',
    },
    dolphin: {
      image: dolphinImg, englishWord: 'dolphin', russianWord: 'лошадка', audio: 'dolphin.mp3',
    },
    giraffe: {
      image: giraffeImg, englishWord: 'giraffe', russianWord: 'киска', audio: 'giraffe.mp3',
    },
    fish: {
      image: fishImg, englishWord: 'fish', russianWord: 'курочка', audio: 'fish.mp3',
    },
    lion: {
      image: lionImg, englishWord: 'lion', russianWord: 'клолик', audio: 'lion.mp3',
    },
    mouse: {
      image: mouseImg, englishWord: 'mouse', russianWord: 'собачка', audio: 'mouse.mp3',
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
    shoe: {
      image: shoeImg, englishWord: 'shoe', russianWord: 'то, чего всегда мало', audio: 'shoe.mp3',
    },
    coat: {
      image: coatImg, englishWord: 'coat', russianWord: 'боты', audio: 'coat.mp3',
    },
    skirt: {
      image: skirtImg, englishWord: 'skirt', russianWord: 'боты', audio: 'skirt.mp3',
    },
    pants: {
      image: pantsImg, englishWord: 'pants', russianWord: 'боты', audio: 'pants.mp3',
    },
    blouse: {
      image: blouseImg, englishWord: 'blouse', russianWord: 'боты', audio: 'blouse.mp3',
    },
  },
  emotion: {
    pagename: 'Emotion',
    scared: {
      image: scaredImg, englishWord: 'scared', russianWord: 'рубаха', audio: 'scared.mp3',
    },
    happy: {
      image: happyImg, englishWord: 'happy', russianWord: 'то, чего всегда мало', audio: 'happy.mp3',
    },
    tired: {
      image: tiredImg, englishWord: 'tired', russianWord: 'боты', audio: 'tired.mp3',
    },
    sad: {
      image: sadImg, englishWord: 'sad', russianWord: 'то, чего всегда мало', audio: 'sad.mp3',
    },
    surprised: {
      image: surprisedImg, englishWord: 'surprised', russianWord: 'боты', audio: 'surprised.mp3',
    },
    laugh: {
      image: laughImg, englishWord: 'laugh', russianWord: 'боты', audio: 'laugh.mp3',
    },
    smile: {
      image: smileImg, englishWord: 'smile', russianWord: 'боты', audio: 'smile.mp3',
    },
    angry: {
      image: angryImg, englishWord: 'angry', russianWord: 'боты', audio: 'angry.mp3',
    },
  },
};
