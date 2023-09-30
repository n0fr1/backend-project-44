import readlinesync from 'readline-sync';
import greetings from './cli.js';
import {
  getRandomInt,
  getEven,
  getRandomOper,
  getCalc,
  roundsGame,
} from './common.js';

const wrongAnswerShowText = (userName, rightAnswer, answerUser) => {
  console.log(
    `'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
  );
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

const rightAnswerEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let randNum = getRandomInt();
  if (randNum === 0) {
    do {
      randNum = getRandomInt();
    } while (randNum === 0);
  }
  console.log(`Question: ${randNum}`);
  return getEven(randNum);
};

const rightAnswerCalc = () => {
  console.log('What is the result of the expression?');
  let randNum1 = getRandomInt();
  let randNum2 = getRandomInt();
  if (randNum1 < randNum2) {
    do {
      randNum1 = getRandomInt();
      randNum2 = getRandomInt();
    } while (randNum1 < randNum2);
  }
  const operation = getRandomOper();
  console.log(`Question: ${randNum1} ${operation} ${randNum2}`);
  return getCalc(randNum1, randNum2, operation);
};

const getRightAnswer = (gameName) => {
  let rightAnswer;
  if (gameName === 'Even') {
    rightAnswer = rightAnswerEven();
  }
  if (gameName === 'Calc') {
    rightAnswer = rightAnswerCalc();
  }
  return rightAnswer;
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
    [correctAnswers, answerUser] = calculateUserQuestions(
      userName,
      rightAnswer,
      correctAnswers,
    );
  } while (countRound < roundsGame && answerUser === rightAnswer);
  congratulatUser(userName, correctAnswers);
};

export default engineGames;
