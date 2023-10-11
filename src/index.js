import { getUserAnswer } from './utils.js';

const roundsGames = 3;

const startGame = (startCondition, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name?');
  console.log(`Hello, ${userName}!`);
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  let question;
  do {
    console.log(startCondition);
    [question, rightAnswer] = getRound();
    console.log(question);
    answerUser = getUserAnswer('Your answer:');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
    }
    countRound += 1;
  } while (countRound < roundsGames && answerUser === rightAnswer);
  if (correctAnswers === roundsGames) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
