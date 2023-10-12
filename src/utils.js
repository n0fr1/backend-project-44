import readlinesync from 'readline-sync';

const getRandomInt = (limitRandom, minNum) => (Math.floor(Math.random() * limitRandom) + minNum);

const isDivisible = (num, divider) => (num % divider === 0);

const getUserInput = (prompt) => readlinesync.question(prompt);

export { getRandomInt, isDivisible, getUserInput };
