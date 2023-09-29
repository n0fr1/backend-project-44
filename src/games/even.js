import greetings from '../cli.js';
import {
  getRandomInt, calculateUserQuestions, congratulatUser, roundsGame,
} from '../index.js';

const testEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countRound = 0;
  let correctAnswers = 0;
  let rightAnswer;
  let answerUser;
  do {
    countRound += 1;
    const randNum = getRandomInt();
    console.log(`Question: ${randNum}`);
    rightAnswer = testEven(randNum);
    [correctAnswers, answerUser] = calculateUserQuestions(userName, rightAnswer, correctAnswers);
  } while ((countRound < roundsGame) && (answerUser === rightAnswer));
  congratulatUser(userName, correctAnswers);
};

export default evenGame;
