import readlinesync from 'readline-sync';
import greetings from '../cli.js';

const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);

const testEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const wrongAnswerText = (answerUser, rightAnswer, userName) => {
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, '${userName}'!`);
};

const evenGame = () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countRound = 0;
  let countRightAnswers = 0;
  const roundsGame = 3;
  const maxInt = 100;
  let answerUser;
  let rightAnswer;
  do {
    countRound += 1;
    const randItem = getRandomInt(maxInt);
    console.log(`Question: ${randItem}`);
    rightAnswer = testEven(randItem);
    answerUser = readlinesync.question('Your answer:');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      wrongAnswerText(answerUser, rightAnswer, userName);
    }
  } while ((countRound < roundsGame) && (answerUser === rightAnswer));
  if (countRightAnswers === roundsGame) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenGame;
