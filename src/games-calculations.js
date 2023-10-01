import _ from 'lodash';

const getRandomInt = (limitRandom) => {
  let rand = Math.random() * limitRandom;
  if (rand < 1) {
    do {
      rand = Math.random() * limitRandom;
    } while (rand < 1);
  }
  return Math.floor(rand);
};

const getEven = (randItem) => (randItem % 2 === 0 ? 'yes' : 'no');

const getRandomOper = (calcOperations) => {
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

const gedDel = (num) => {
  const arr = [];
  const maxDel = Math.floor(num / 2);
  let i = 0;
  while (i <= maxDel) {
    i += 1;
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

const getGcd = (num1, num2) => {
  const [maxNum, minNum] = [Math.max(num1, num2), Math.min(num1, num2)];
  if (maxNum % minNum === 0) {
    return minNum.toString();
  }
  const arrDel1 = gedDel(num1);
  const arrDel2 = gedDel(num2);
  const arrIntesec = _.intersection(arrDel1, arrDel2);
  const nod = _.max(arrIntesec).toString();
  return nod;
};

export {
  getRandomInt,
  getEven,
  getRandomOper,
  getCalc,
  getGcd,
};
