const getRandomInt = (limitRandom) => {
  let rand = Math.random() * limitRandom;
  if (rand < 1) {
    do {
      rand = Math.random() * limitRandom;
    } while (rand < 1);
  }
  return Math.floor(rand);
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

export { gedDel, getRandomInt };
