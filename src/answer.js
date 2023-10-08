import readlinesync from 'readline-sync';

// А почему "answer", если функция возвращает имя пользователя?)
const getUserAnswer = (userQuestion) => {
  const answer = readlinesync.question(userQuestion);
  return answer;
};

export default getUserAnswer;
