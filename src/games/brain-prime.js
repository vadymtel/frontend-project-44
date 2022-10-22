import randomIntegerValue from '../utility/randomIntegerValue.js';
import isPrime from '../utility/isPrimeNumber.js';
import startGame from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const question = randomIntegerValue(startOfRange, endOfRange);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = () => startGame(instruction, getQuestionAndAnswer);

export default startBrainPrime;
