import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntCalc = 10;
const calcOperations = ['+', '-', '*'];
const minIntCalc = 0;

const getRandomOper = () => {
  let result = '';
  const charactersLength = calcOperations.length;
  // Можно не писать целую функцию для получения рандомного элемента из массива. Просто возьми вот эту строку и отнеси ее в getRoundCalc)
  // Как сделано в hideNum в progression.js
  result = calcOperations[getRandomInt(charactersLength, minIntCalc)];
  return result;
};

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
  // Вот этот лог вроде лишний? Лучше лишние логи в коде не оставлять.
  console.log(randNum1, randNum2, Math.min(randNum1, randNum2));
  [randNum1, randNum2] = [Math.max(randNum1, randNum2), Math.min(randNum1, randNum2)];
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
