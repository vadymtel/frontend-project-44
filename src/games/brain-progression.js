import startGame from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import getProgressionWithHiddenItem from '../utility/getProgressionWithHiddenItem.js';

const instruction = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const startOfRange = 1;
  const endOfRange = 100;
  const beginOfProgresion = randomIntegerValue(startOfRange, endOfRange);
  const stepOfProgresion = randomIntegerValue(beginOfProgresion, endOfRange);
  const minLength = 5;
  const maxLength = 10;
  const lengthOfProgression = randomIntegerValue(minLength, maxLength);
  const IndexOfHiddenItem = randomIntegerValue(startOfRange, lengthOfProgression);
  const question = getProgressionWithHiddenItem(
    beginOfProgresion,
    stepOfProgresion,
    lengthOfProgression,
    IndexOfHiddenItem,
  );
  const rightAnswer = beginOfProgresion + stepOfProgresion * (IndexOfHiddenItem);
  return [question, rightAnswer];
};

const StartBrainProgression = () => startGame(instruction, getQuestionAndAnswer);

export default StartBrainProgression;
