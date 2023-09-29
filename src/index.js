import readlinesync from 'readline-sync';

const roundsGame = 3;
const maxInt = 100;

const getRandomInt = () => Math.floor(Math.random() * maxInt);

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

export {
  getRandomInt, calculateUserQuestions, congratulatUser, roundsGame,
};
