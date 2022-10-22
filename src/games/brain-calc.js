import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import calculate from '../utility/calculate.js';

const instruction = 'What is the result of the expression?';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const operators = ['+', '-', '*'];
  const chooseRandomOperator = operators[randomIntegerValue(startOfRange, operators.length)];
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);
  const question = `${x} ${chooseRandomOperator} ${y}`;
  const rightAnswer = calculate(x, y, chooseRandomOperator);
  return [question, rightAnswer];
};

const startBrainCalc = () => GameProcess(instruction, roundOfGame);

export default startBrainCalc;
