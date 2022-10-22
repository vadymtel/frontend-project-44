import startGame from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';
import calculate from '../utility/calculate.js';

const instruction = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomIntegerValue(startOfRange, operators.length)];
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);
  const question = `${x} ${randomOperator} ${y}`;
  const rightAnswer = calculate(x, y, randomOperator);
  return [question, rightAnswer];
};

const startBrainCalc = () => startGame(instruction, getQuestionAndAnswer);

export default startBrainCalc;
