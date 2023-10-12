import startGame from '../index.js';
import { getRandomInt, isDivisible } from '../utils.js';

const maxIntEven = 100;
const minIntEven = 1;

const getRoundEven = () => {
  const randNum = getRandomInt(maxIntEven, minIntEven);
  const curQuestion = `Question: ${randNum}`;
  const curAnswer = (isDivisible(randNum, 2)) ? 'yes' : 'no';
  return [curQuestion, curAnswer];
};

const evenGame = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameCondition, getRoundEven);
};

export default evenGame;
