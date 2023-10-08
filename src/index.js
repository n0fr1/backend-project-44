import getUserAnswer from './answer.js';

const roundsGames = 3;

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

const getAnswersQuestions = (getRound) => {
  const questions = [];
  const answers = [];
  let counter = 0;
  do {
    counter += 1;
    const [curQuestion, curAnswer] = getRound();
    questions.push(curQuestion);
    answers.push(curAnswer);
  } while (counter < roundsGames);
  return [questions, answers];
};

const startGame = (startCondition, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name?');
  console.log(`Hello, ${userName}!`);
  let countRound = 0;
  let correctAnswers = 0;
  let answerUser;
  let rightAnswer;
  const [questions, answers] = getAnswersQuestions(getRound);
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

export default startGame;
