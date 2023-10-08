import { startGame, roundsGames } from '../index.js';
import { getRandomInt } from '../utils.js';

const maxIntProgression = 20;
const lengthProgression = 10;

const getProgression = (randNum, increment) => {
  let strProgression = '';
  const indMissed = getRandomInt(lengthProgression);
  let counter = 1;
  let el = randNum;
  let missedNum;
  while (counter <= lengthProgression) {
    if (counter !== indMissed) {
      strProgression += ` ${el}`;
    } else {
      strProgression += ' ..';
      missedNum = el;
    }
    counter += 1;
    el += increment;
  }
  return [strProgression, missedNum];
};

const getQuestionsAnswers = () => {
  const questions = [];
  const answers = [];
  let counter = 0;
  do {
    counter += 1;
    const randNum = getRandomInt(maxIntProgression);
    const increment = getRandomInt(maxIntProgression);
    const [progression, missedNum] = getProgression(randNum, increment);
    const curQuestion = `Question:${progression}`;
    const curAnswer = missedNum;
    questions.push(curQuestion);
    answers.push(curAnswer.toString());
  } while (counter < roundsGames);
  return [questions, answers];
};

const progressionGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  const [arrQuestions, arrAnswers] = getQuestionsAnswers();
  startGame(gameCondition, arrQuestions, arrAnswers);
};

export default progressionGame;
