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


/*
  Сейчас модули в директории games, по факту, ничего не делают и содержат абсолютно одинаковый код.
  На самом деле, в каждом из этих модулей должен содержаться тот код, который относится к конкретной игре.
  Смешивать весь код в одном модуле лучше не надо, это нарушает абстракцию между игровым движком, который общий для всех игр, и логикой каждой отдельной игры.
  Нарушение абстракции, в свою очередь, усложнят поддержку проекта (представляем, что мы в реальной разработке).
*/
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

const rightAnswerPrimeEven = (gameName) => {
  let num;
  if (gameName === 'Prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    num = maxIntPrime;
  } else {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    num = maxIntEven;
  }
  const randNum = getRandomInt(num);
  console.log(`Question: ${randNum}`);
  return (gameName === 'Prime') ? getPrime(randNum) : getEven(randNum);
};

/*
  Здесь задействован довольно сложный "финт ушами", когда из модуля конкретной игры передается строка,
  а потом по этой строке выбирается функция, которая уже при вызове возвращает правильный ответ.

  Можно ли это как-нибудь упростить? Спойлер: можно 😏
*/
const getRightAnswer = (gameName) => {
  let rightAnswer;
  if (gameName === 'Calc') {
    rightAnswer = rightAnswerCalc();
  }
  if (gameName === 'Gcd') {
    rightAnswer = rightAnswerGcd();
  }
  if (gameName === 'Progression') {
    rightAnswer = rightAnswerProgression();
  }
  if (gameName === 'Prime' || gameName === 'Even') {
    rightAnswer = rightAnswerPrimeEven(gameName);
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

/*
  Здесь можно было бы поменять нейминг. Сейчас название функции не очень понятное, обычно лучше всего использовать глаголы.
*/
const engineGames = (gameName) => {
  const userName = greetings();
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  do {
    countRound += 1;
    rightAnswer = getRightAnswer(gameName);
    // Опять же, здесь можно обойтись без разделения движка на две функции.
    // Они не такие уж и большие и точно не переиспользуемые, поэтому разбивание кода на несколько частей затрудняет восприятие, но ничего полезного не дает.
    [correctAnswers, answerUser] = calculateUserQuestions(
      userName,
      rightAnswer,
      correctAnswers,
    );
  } while (countRound < roundsGames && answerUser === rightAnswer);
  congratulatUser(userName, correctAnswers);
};

export default engineGames;
