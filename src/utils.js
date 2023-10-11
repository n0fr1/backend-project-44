import readlinesync from 'readline-sync';

const getRandomInt = (limitRandom, minNum) => (Math.floor(Math.random() * limitRandom) + minNum);

// Есть негласное правило, что переменные и функции, которые содержат/возвращают булевы значения, лучше называть начиная с 'is/has'.
// Это улучшает читаемость кода, потому что можно с одного взгляда определить, что здесь идет работа с булевыми значениями.
// Например, здесь у тебя функция отвечает на вопрос "Делится ли одно число на другое без остатка?" -- "isDivisible"
const getDivider = (num, divider) => (num % divider === 0);

// Эта функция используется для получения и ответа, и имени юзера. Можно ее назвать getUserInput, а аргумент -- prompt.
const getUserAnswer = (userQuestion) => readlinesync.question(userQuestion);

export { getRandomInt, getDivider, getUserAnswer };
