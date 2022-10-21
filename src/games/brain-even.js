import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const question = randomIntegerValue(startOfRange, endOfRange);
  const isEven = 0;
  const rightAnswer = question % 2 === isEven ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEven = () => GameProcess(instruction, roundOfGame);

export default startBrainEven;
