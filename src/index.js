import readlinesync from 'readline-sync';

const roundsGame = 3;
const maxInt = 100;

const getRandomInt = () => Math.floor(Math.random() * maxInt);

const wrongAnswerShowText = (info) => {
  console.log(`'${info.answerUser}' is wrong answer ;(. Correct answer was '${info.rightAnswer}'.`);
  console.log(`Let's try again, '${info.userName}'!`);
};

const congratulatUser = (correctAnswers, userName) => {
  if (correctAnswers === roundsGame) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const getUserAnswer = (question) => {
  let countRightAnswers = question.correctAnswers;
  console.log(`Question: ${question.randNum}`);
  const answerUser = readlinesync.question('Your answer:');
  if (answerUser === question.rightAnswer) {
    console.log('Correct!');
    countRightAnswers += 1;
  } else {
    const [rightAnswer, userName] = [question.rightAnswer, question.userName];
    const info = {
      answerUser,
      rightAnswer,
      userName,
    };
    wrongAnswerShowText(info);
  }
  return [countRightAnswers, answerUser];
};

export {
  getRandomInt, getUserAnswer, congratulatUser, roundsGame,
};
