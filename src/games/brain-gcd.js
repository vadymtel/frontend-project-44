import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import isGreatestCommonDivisor from '../utility/isGreatestCommonDivisor.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);
  const question = `${x} ${y}`;
  const rightAnswer = isGreatestCommonDivisor(x, y);
  return [question, rightAnswer];
};

const startBrainGCD = () => GameProcess(instruction, roundOfGame);

export default startBrainGCD;
