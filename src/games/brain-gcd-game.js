import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const instruction = 'Find the greatest common divisor of given numbers.';
const getGcd = () => {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);
  const question = `${x} ${y}`;

  if (x === y) {
    const rightAnswer = x;
    return [question, rightAnswer];
  }
  let rightAnswer = 0;
  for (let i = 0; i <= x && i <= y; i += 1) {
    if (x % i === 0 && y % i === 0) {
      rightAnswer = i;
    }
  }
  return [question, rightAnswer];
};

const letGcdGame = () => runGame(instruction, getGcd);

export default letGcdGame;
