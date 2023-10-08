import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntCalc = 10;
const calcOperations = '+-*';

const getRandomOper = () => {
  let result = '';
  const charactersLength = calcOperations.length;
  result = calcOperations.charAt(Math.floor(Math.random() * charactersLength));
  return result;
};

const getCalc = (num1, num2, operation) => {
  let result = 0;
  if (operation === '+') {
    result = num1 + num2;
  }
  if (operation === '*') {
    result = num1 * num2;
  }
  if (operation === '-') {
    result = num1 - num2;
  }
  return result;
};

const getFirstNumGreaterSec = () => {
  let randNum1 = getRandomInt(maxIntCalc);
  let randNum2 = getRandomInt(maxIntCalc);
  if (randNum1 < randNum2) {
    do {
      randNum1 = getRandomInt(maxIntCalc);
      randNum2 = getRandomInt(maxIntCalc);
    } while (randNum1 < randNum2);
  }
  return [randNum1, randNum2];
};

const getRoundCalc = () => {
  const [randNum1, randNum2] = getFirstNumGreaterSec();
  const operation = getRandomOper();
  const curQuestion = `Question: ${randNum1} ${operation} ${randNum2}`;
  const curAnswer = getCalc(randNum1, randNum2, operation);
  return [curQuestion, curAnswer.toString()];
};

const calcGame = () => {
  const gameCondition = 'What is the result of the expression?';
  startGame(gameCondition, getRoundCalc);
};

export default calcGame;
