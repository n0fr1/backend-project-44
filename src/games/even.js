import { startGame, roundsGames } from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntEven = 100;

const getEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const getQuestionsAnswers = () => {
  const questions = [];
  const answers = [];
  let counter = 0;
  do {
    counter += 1;
    const randNum = getRandomInt(maxIntEven);
    const curQuestion = `Question: ${randNum}`;
    const curAnswer = getEven(randNum);
    questions.push(curQuestion);
    answers.push(curAnswer.toString());
  } while (counter < roundsGames);
  return [questions, answers];
};

const evenGame = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const [arrQuestions, arrAnswers] = getQuestionsAnswers();
  startGame(gameCondition, arrQuestions, arrAnswers);
};

export default evenGame;
