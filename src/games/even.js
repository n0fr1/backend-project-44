import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntEven = 100;

// Лучше, если функция для определения четности числа будет переиспользуемой утилитой и ничего не будет знать об ответах в какой-то игре.
const getEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const getRoundEven = () => {
  const randNum = getRandomInt(maxIntEven);
  const curQuestion = `Question: ${randNum}`;
  const curAnswer = getEven(randNum);
  return [curQuestion, curAnswer];
};

const evenGame = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameCondition, getRoundEven);
};

export default evenGame;
