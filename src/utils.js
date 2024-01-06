import readlinesync from 'readline-sync';

export const getRandomInt = (limitRandom, minNum) => (Math.floor(Math.random() * limitRandom)
+ minNum);

export const isDivisible = (num, divider) => (num % divider === 0);

export const getUserInput = (prompt) => readlinesync.question(prompt);
