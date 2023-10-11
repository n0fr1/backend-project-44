import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntProgression = 20;
const lengthProgression = 10;
const minIntProgression = 1;

const getProgression = (randNum, increment) => {
  const result = [];
  let counter = 1;
  let el = randNum;
  while (counter <= lengthProgression) {
    result.push(el);
    counter += 1;
    el += increment;
  }
  return result;
};

const hideNum = (arrProgression) => {
  const arr = arrProgression;
  const numIndHidden = getRandomInt(lengthProgression - 1, 0);
  const numHidden = arr[numIndHidden];
  arr[numIndHidden] = '..';
  return [arr, numHidden];
};

const getRoundProgression = () => {
  const randNum = getRandomInt(maxIntProgression, minIntProgression);
  const increment = getRandomInt(maxIntProgression, minIntProgression);
  const arrProgression = getProgression(randNum, increment);
  const [progression, numHidden] = hideNum(arrProgression);
  const strProgression = progression.join(' ');
  const curQuestion = `Question: ${strProgression}`;

  return [curQuestion, numHidden.toString()];
};

const progressionGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  startGame(gameCondition, getRoundProgression);
};

export default progressionGame;
