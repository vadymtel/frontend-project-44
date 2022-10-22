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
  const progressionLength = randomIntegerValue(minLength, maxLength);
  const indexOfHiddenItem = randomIntegerValue(startOfRange, progressionLength);
  const question = getProgressionWithHiddenItem(
    beginOfProgresion,
    stepOfProgresion,
    progressionLength,
    indexOfHiddenItem,
  );
  const rightAnswer = beginOfProgresion + stepOfProgresion * (indexOfHiddenItem);
  return [question, rightAnswer];
};

const StartBrainProgression = () => startGame(instruction, getQuestionAndAnswer);

export default StartBrainProgression;
