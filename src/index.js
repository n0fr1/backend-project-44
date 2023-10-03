import readlinesync from 'readline-sync';
import greetings from './cli.js';
import {
  roundsGames,
  maxIntEven,
  maxIntCalc,
  maxIntGcd,
  maxIntProgression,
  lengthProgression,
  maxIntPrime,
  calcOperations,
} from './games-constants.js';
import {
  getRandomInt,
  getEven,
  getRandomOper,
  getCalc,
  getGcd,
  getProgression,
  getPrime,
} from './games-calculations.js';

const rightAnswerEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randNum = getRandomInt(maxIntEven);
  console.log(`Question: ${randNum}`);
  return getEven(randNum);
};

const rightAnswerCalc = () => {
  console.log('What is the result of the expression?');
  let randNum1 = getRandomInt(maxIntCalc);
  let randNum2 = getRandomInt(maxIntCalc);
  if (randNum1 < randNum2) {
    do {
      randNum1 = getRandomInt(maxIntCalc);
      randNum2 = getRandomInt(maxIntCalc);
    } while (randNum1 < randNum2);
  }
  const operation = getRandomOper(calcOperations);
  console.log(`Question: ${randNum1} ${operation} ${randNum2}`);
  return getCalc(randNum1, randNum2, operation);
};

const rightAnswerGcd = () => {
  console.log('Find the greatest common divisor of given numbers');
  const randNum1 = getRandomInt(maxIntGcd);
  const randNum2 = getRandomInt(maxIntGcd);
  console.log(`Question: ${randNum1} ${randNum2}`);
  return getGcd(randNum1, randNum2);
};

const rightAnswerProgression = () => {
  console.log('What number is missing in the progression?');
  const randNum1 = getRandomInt(maxIntProgression);
  const increment = getRandomInt(maxIntProgression);
  const [progression, missedNum] = getProgression(randNum1, increment, lengthProgression);
  console.log(`Question:${progression}`);
  return missedNum;
};

const rightAnswerPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randNum = getRandomInt(maxIntPrime);
  console.log(`Question: ${randNum}`);
  return getPrime(randNum);
};

const getRightAnswer = (gameName) => {
  let rightAnswer;
  if (gameName === 'Even') {
    rightAnswer = rightAnswerEven();
  }
  if (gameName === 'Calc') {
    rightAnswer = rightAnswerCalc();
  }
  if (gameName === 'Gcd') {
    rightAnswer = rightAnswerGcd();
  }
  if (gameName === 'Progression') {
    rightAnswer = rightAnswerProgression();
  }
  if (gameName === 'Prime') {
    rightAnswer = rightAnswerPrime();
  }
  return rightAnswer.toString();
};

const wrongAnswerShowText = (userName, rightAnswer, answerUser) => {
  console.log(
    `'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
  );
  console.log(`Let's try again, ${userName}!`);
};

const congratulatUser = (userName, correctAnswers) => {
  if (correctAnswers === roundsGames) {
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
  } while (countRound < roundsGames && answerUser === rightAnswer);
  congratulatUser(userName, correctAnswers);
};

export default engineGames;
