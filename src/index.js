import readlinesync from 'readline-sync';
import greetUser from './cli.js';

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
  const userName = greetUser();
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  do {
    console.log(startCondition);
    console.log(questions[countRound]);
    rightAnswer = answers[countRound];
    answerUser = readlinesync.question('Your answer:');
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
