import readlinesync from 'readline-sync';

const getUserAnswer = (userQuestion) => {
  const answer = readlinesync.question(userQuestion);
  return answer;
};

export default getUserAnswer;
