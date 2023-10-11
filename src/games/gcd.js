import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntGcd = 100;
const minIntGcd = 1;

const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;
  if (y === 0) {
    return x;
  }
  const buf = y;
  y = x % y;
  x = buf;
  return getGcd(x, y);
};

const getRoundGcd = () => {
  const randNum1 = getRandomInt(maxIntGcd, minIntGcd);
  const randNum2 = getRandomInt(maxIntGcd, minIntGcd);
  const curQuestion = `Question: ${randNum1} ${randNum2}`;
  const curAnswer = getGcd(randNum1, randNum2);
  return [curQuestion, curAnswer.toString()];
};

const gcdGame = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers';
  startGame(gameCondition, getRoundGcd);
};

export default gcdGame;
