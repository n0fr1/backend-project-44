const roundsGame = 3;
const maxIntForGames = 10;
const calcOperations = '+-*';

const getRandomInt = () => {
  let rand = Math.floor(Math.random());
  if (rand === 0) {
    do {
      rand = Math.floor(Math.random());
    } while (rand === 0);
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
