import startGame from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import calculate from '../utility/calculate.js';

const instruction = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[randomIntegerValue(startOfRange, operators.length)];
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);
  const question = `${x} ${getRandomOperator} ${y}`;
  const rightAnswer = calculate(x, y, getRandomOperator);
  return [question, rightAnswer];
};

const startBrainCalc = () => startGame(instruction, getQuestionAndAnswer);

export default startBrainCalc;
