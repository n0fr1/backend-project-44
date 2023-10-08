import { startGame, roundsGames } from '../index.js';
import { getRandomInt, gedDel } from '../utils.js';

const maxIntPrime = 100;

const getPrime = (randNum) => {
  const arrDel = gedDel(randNum);
  return (arrDel.length > 1) ? 'no' : 'yes';
};

const getQuestionsAnswers = () => {
  const questions = [];
  const answers = [];
  let counter = 0;
  do {
    counter += 1;
    const randNum = getRandomInt(maxIntPrime);
    const curQuestion = `Question: ${randNum}`;
    const curAnswer = getPrime(randNum);
    questions.push(curQuestion);
    answers.push(curAnswer.toString());
  } while (counter < roundsGames);
  return [questions, answers];
};

const primeGame = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const [arrQuestions, arrAnswers] = getQuestionsAnswers();
  startGame(gameCondition, arrQuestions, arrAnswers);
};

export default primeGame;
