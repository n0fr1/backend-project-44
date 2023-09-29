const roundsGame = 3;
const maxInt = 100;

const getRandomInt = () => Math.floor(Math.random() * maxInt);

const testEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

export { getRandomInt, testEven, roundsGame };
