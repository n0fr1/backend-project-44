import greetings from '../cli.js';
import {
  getRandomInt, getUserAnswer, congratulatUser, roundsGame,
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
    rightAnswer = testEven(randNum);
    const question = {
      rightAnswer,
      userName,
      correctAnswers,
      randNum,
    };
    [correctAnswers, answerUser] = getUserAnswer(question);
  } while ((countRound < roundsGame) && (answerUser === rightAnswer));
  congratulatUser(correctAnswers, userName);
};

export default evenGame;
