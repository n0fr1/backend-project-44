import startGame from '../index.js';
import { getRandomInt, isDivisible } from '../utils.js';

const maxIntPrime = 100;
const minIntPrime = 1;

const getPrime = (num) => {
  const maxDel = Math.floor(num / 2);
  let i = 2;
  while (i <= maxDel) {
    if (isDivisible(num, i)) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getRoundPrime = () => {
  const randNum = getRandomInt(maxIntPrime, minIntPrime);
  const curQuestion = `Question: ${randNum}`;
  const curAnswer = (getPrime(randNum)) ? 'yes' : 'no';
  return [curQuestion, curAnswer];
};

const primeGame = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameCondition, getRoundPrime);
};

export default primeGame;
