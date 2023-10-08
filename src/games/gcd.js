import _ from 'lodash';
import startGame from '../index.js';
import { getRandomInt, gedDel } from '../utils.js';

const maxIntGcd = 100;

const getGcd = (num1, num2) => {
  const [maxNum, minNum] = [Math.max(num1, num2), Math.min(num1, num2)];
  if (maxNum % minNum === 0) {
    return minNum;
  }
  const arrDel1 = gedDel(num1);
  const arrDel2 = gedDel(num2);
  const arrIntesec = _.intersection(arrDel1, arrDel2);
  const nod = _.max(arrIntesec);
  return nod;
};

const getRoundGcd = () => {
  const randNum1 = getRandomInt(maxIntGcd);
  const randNum2 = getRandomInt(maxIntGcd);
  const curQuestion = `Question: ${randNum1} ${randNum2}`;
  const curAnswer = getGcd(randNum1, randNum2);
  return [curQuestion, curAnswer.toString()];
};

const gcdGame = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers';
  startGame(gameCondition, getRoundGcd);
};

export default gcdGame;
