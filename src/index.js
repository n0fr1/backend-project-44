import { getUserInput } from './utils.js';

const roundsGames = 3;

const startGame = (startCondition, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserInput('May I have your name?');
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;
  for (let round = 1; round <= roundsGames; round += 1) {
    console.log(startCondition);
    const [question, rightAnswer] = getRound();
    console.log(question);
    const answerUser = getUserInput('Your answer:');
    if (answerUser !== rightAnswer) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    correctAnswers += 1;
    console.log('Correct!');
  }
  if (correctAnswers === roundsGames) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
