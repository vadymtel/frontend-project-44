import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import getProgressionWithHiddenItem from '../utility/getProgressionWithHiddenItem.js';

const instruction = 'What number is missing in the progression?';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const beginOfProgresion = randomIntegerValue(startOfRange, endOfRange);
  const stepOfProgresion = randomIntegerValue(beginOfProgresion, endOfRange);
  const minLength = 5;
  const maxLength = 10;
  const lengthOfProgression = randomIntegerValue(minLength, maxLength);
  const numberOfHiddenItem = randomIntegerValue(startOfRange, lengthOfProgression);
  const question = getProgressionWithHiddenItem(
    beginOfProgresion,
    stepOfProgresion,
    lengthOfProgression,
    numberOfHiddenItem,
  );
  const rightAnswer = beginOfProgresion + stepOfProgresion * (numberOfHiddenItem + 1);
  return [question, rightAnswer];
};

const StartBrainProgression = () => GameProcess(instruction, roundOfGame);

export default StartBrainProgression;
