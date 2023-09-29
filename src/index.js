import readlinesync from 'readline-sync';
import greetings from './cli.js';
import { getRandomInt, testEven, roundsGame } from './common.js';

const wrongAnswerShowText = (userName, rightAnswer, answerUser) => {
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, '${userName}'!`);
};

const congratulatUser = (userName, correctAnswers) => {
  if (correctAnswers === roundsGame) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const calculateUserQuestions = (userName, rightAnswer, correctAnswers) => {
  let countRightAnswers = correctAnswers;
  const answerUser = readlinesync.question('Your answer:');
  if (answerUser === rightAnswer) {
    console.log('Correct!');
    countRightAnswers += 1;
  } else {
    wrongAnswerShowText(userName, rightAnswer, answerUser);
  }
  return [countRightAnswers, answerUser];
};

const getRightAnswer = (gameName) => {
  if (gameName === 'Even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randNum = getRandomInt();
    console.log(`Question: ${randNum}`);
    return testEven(randNum);
  }
  return 1;
};

const engineGames = (gameName) => {
  const userName = greetings();
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  do {
    countRound += 1;
    rightAnswer = getRightAnswer(gameName);
    [correctAnswers, answerUser] = calculateUserQuestions(userName, rightAnswer, correctAnswers);
  } while ((countRound < roundsGame) && (answerUser === rightAnswer));
  congratulatUser(userName, correctAnswers);
};

export default engineGames;
