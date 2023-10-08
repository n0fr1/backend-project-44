import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntProgression = 20;
const lengthProgression = 10;

// Функция называется getProgression, но на самом деле тут тоже смешано два не связанных действия: создание ряда и скрытие числа в нем.
// Лучше для каждого из этих действий написать отдельную функцию.
const getProgression = (randNum, increment) => {
  let strProgression = '';
  const indMissed = getRandomInt(lengthProgression);
  let counter = 1;
  let el = randNum;
  let missedNum;
  while (counter <= lengthProgression) {
    if (counter !== indMissed) {
      strProgression += ` ${el}`;
    } else {
      strProgression += ' ..';
      missedNum = el;
    }
    counter += 1;
    el += increment;
  }
  return [strProgression, missedNum];
};

const getRoundProgression = () => {
  const randNum = getRandomInt(maxIntProgression);
  const increment = getRandomInt(maxIntProgression);
  const [progression, missedNum] = getProgression(randNum, increment);
  const curQuestion = `Question:${progression}`;
  const curAnswer = missedNum;
  return [curQuestion, curAnswer.toString()];
};

const progressionGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  startGame(gameCondition, getRoundProgression);
};

export default progressionGame;
