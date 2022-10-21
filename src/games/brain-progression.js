import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';

const instruction = 'What number is missing in the progression?';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const beginOfProgresion = randomIntegerValue(startOfRange, endOfRange);
  const stepOfProgresion = randomIntegerValue(beginOfProgresion, endOfRange);
  const minLength = 5;
  const maxLength = 11;
  const lengthOfProgression = randomIntegerValue(minLength, maxLength);

  const question = [];
  question.push(beginOfProgresion);

  for (let i = 1; i <= lengthOfProgression; i += 1) {
    question.push(beginOfProgresion + stepOfProgresion * i);
  }
  const rightAnswer = question.splice(randomIntegerValue(startOfRange, question.length - 1), 1, '..');
  return [question.join(' '), rightAnswer];
};

const StartBrainProgression = () => GameProcess(instruction, roundOfGame);

export default StartBrainProgression;
