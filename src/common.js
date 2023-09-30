const roundsGame = 3;
const maxIntForGames = 10;
const calcOperations = '+-*';

const getRandomInt = () => {
  let rand = Math.random() * maxIntForGames;
  if (rand < 1) {
    do {
      rand = Math.floor(rand);
    } while (rand < 1);
  }
  return rand * maxIntForGames;
};

const getEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const getRandomOper = () => {
  let result = '';
  const charactersLength = calcOperations.length;
  result = calcOperations.charAt(Math.floor(Math.random() * charactersLength));
  return result;
};

const getCalc = (num1, num2, operation) => {
  let result = 0;
  if (operation === '+') {
    result = num1 + num2;
  }
  if (operation === '*') {
    result = num1 * num2;
  }
  if (operation === '-') {
    result = num1 - num2;
  }
  return result.toString();
};

export {
  getRandomInt,
  getEven,
  getRandomOper,
  getCalc,
  roundsGame,
};
