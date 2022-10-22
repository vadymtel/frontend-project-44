import startGame from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const question = randomIntegerValue(startOfRange, endOfRange);
  const even = 0;
  const rightAnswer = question % 2 === even ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEven = () => startGame(instruction, getQuestionAndAnswer);

export default startBrainEven;
