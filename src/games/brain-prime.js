import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import isPrime from '../utility/isPrimeNumber.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const question = randomIntegerValue(startOfRange, endOfRange);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

const startBrainPrime = () => GameProcess(instruction, roundOfGame);

export default startBrainPrime;
