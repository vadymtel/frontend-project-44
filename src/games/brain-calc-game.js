import { runGame } from '../index.js';
import { getRandomInt } from '../randomNumber.js';

const instruction = 'What is the result of the expression?';
const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const oper = operators[getRandomInt(0, operators.length)];
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 10);

  switch (oper) {
    case '+': {
      const question = `${x} + ${y}`;
      const rightAnswer = x + y;
      return [question, rightAnswer];
    }
    case '-': {
      const question = `${x} - ${y}`;
      const rightAnswer = x - y;
      return [question, rightAnswer];
    }
    default: {
      const question = `${x} * ${y}`;
      const rightAnswer = x * y;
      return [question, rightAnswer];
    }
  }
};

const letCalc = () => runGame(instruction, getQuestion);

export { letCalc };
