import getUserAnswer from './answer.js';

export const roundsGames = 3;

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

const startGame = (startCondition, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name?');
  console.log(`Hello, ${userName}!`);
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  do {
    console.log(startCondition);
    console.log(questions[countRound]);
    rightAnswer = answers[countRound];
    answerUser = getUserAnswer('Your answer:');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      wrongAnswerShowText(userName, rightAnswer, answerUser);
    }
    countRound += 1;
  } while (countRound < roundsGames && answerUser === rightAnswer);
  congratulatUser(userName, correctAnswers);
};

export { startGame };
