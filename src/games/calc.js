import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntCalc = 10;
const calcOperations = ['+', '-', '*'];
const minIntCalc = 0;

const getCalc = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operation ${operation} not defined`);
  }
};

const getRoundCalc = () => {
  let randNum1 = getRandomInt(maxIntCalc, minIntCalc);
  let randNum2 = getRandomInt(maxIntCalc, minIntCalc);
  console.log(randNum1, randNum2, Math.min(randNum1, randNum2));
  [randNum1, randNum2] = [Math.max(randNum1, randNum2), Math.min(randNum1, randNum2)];
  const calcOperationsLength = calcOperations.length;
  const operation = calcOperations[getRandomInt(calcOperationsLength, minIntCalc)];
  const curQuestion = `Question: ${randNum1} ${operation} ${randNum2}`;
  const curAnswer = getCalc(randNum1, randNum2, operation);
  return [curQuestion, curAnswer.toString()];
};

const calcGame = () => {
  const gameCondition = 'What is the result of the expression?';
  startGame(gameCondition, getRoundCalc);
};

export default calcGame;
