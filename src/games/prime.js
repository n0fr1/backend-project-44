import startGame from '../index.js';
import { getRandomInt, gedDel } from '../utils.js';

const maxIntPrime = 100;

const getPrime = (randNum) => {
  const arrDel = gedDel(randNum);
  return (arrDel.length > 1) ? 'no' : 'yes';
};

const getRoundPrime = () => {
  const randNum = getRandomInt(maxIntPrime);
  const curQuestion = `Question: ${randNum}`;
  const curAnswer = getPrime(randNum);
  return [curQuestion, curAnswer];
};

const primeGame = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameCondition, getRoundPrime);
};

export default primeGame;
