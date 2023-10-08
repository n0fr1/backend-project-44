import startGame from '../index.js';
import { getRandomInt, gedDel } from '../utils.js';

const maxIntPrime = 100;

// Чтобы определеить, простое число или нет, достаточно проверить, что оно не делится без остатка ни на одно число, которое меньше его половины.
// Это логику можно описать прямо здесь. А логика в gedDel кажется неоправданно переусложненной)
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
