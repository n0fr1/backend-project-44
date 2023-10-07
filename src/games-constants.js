/*
  Представим, что я ничего не знаю о проекте brain-games и вижу твой код в первый раз. Я бы вообще не понял, что к чему относится)
  Лучше отнести константы ближе к тем модулям, в которых они используются.
*/

const roundsGames = 3;
const maxIntEven = 100;
const maxIntCalc = 10;
const maxIntGcd = 100;
const maxIntProgression = 20;
const lengthProgression = 10;
const maxIntPrime = 100;
const calcOperations = '+-*';

/*
 А еще можно делать так:

 export const a = 1;
 export const b = 2;
 ...
*/
export {
  roundsGames,
  maxIntEven,
  maxIntCalc,
  maxIntGcd,
  maxIntProgression,
  lengthProgression,
  maxIntPrime,
  calcOperations,
};
