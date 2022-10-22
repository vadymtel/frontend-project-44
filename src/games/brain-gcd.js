import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import getGreatestCommonDivisor from '../utility/getGreatestCommonDivisor.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const roundOfGame = () => {
  const startOfRange = 1;
  const endOfRange = 100;
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);
  const question = `${x} ${y}`;
  const rightAnswer = getGreatestCommonDivisor(x, y);
  return [question, rightAnswer];
};

const startBrainGCD = () => GameProcess(instruction, roundOfGame);

export default startBrainGCD;
