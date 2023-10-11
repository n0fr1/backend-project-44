import readlinesync from 'readline-sync';

const getRandomInt = (limitRandom, minNum) => (Math.floor(Math.random() * limitRandom) + minNum);

const getDivider = (num, divider) => (num % divider === 0);

const getUserAnswer = (userQuestion) => readlinesync.question(userQuestion);

export { getRandomInt, getDivider, getUserAnswer };
