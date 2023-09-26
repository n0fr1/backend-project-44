import readlinesync from 'readline-sync';

const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);

const testEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const wrongAnswerText = (answerUser, rightAnswer) => console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxInt = 100;
  const randItem = getRandomInt(maxInt);
  console.log(`Question: ${randItem}`);
  const rightAnswer = testEven(randItem);
  const answerUser = readlinesync.question('Your answer:');
  const formatUserAnswer = answerUser === 'no' || answerUser === 'yes';
  if (!formatUserAnswer) {
    wrongAnswerText(answerUser, rightAnswer);
  } else if (answerUser === rightAnswer) {
    console.log('Correct!');
  } else {
    wrongAnswerText(answerUser, rightAnswer);
  }
};

export default evenGame;
