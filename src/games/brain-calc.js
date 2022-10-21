import GameProcess from '../index.js';
import randomIntegerValue from '../utility/randomIntegerValue.js';

const instruction = 'What is the result of the expression?';

const roundOfGame = () => {
  const startOfRange = 0;
  const endOfRange = 100;
  const operators = ['+', '-', '*'];
  const chooseRandomOperator = operators[randomIntegerValue(startOfRange, operators.length)];
  const x = randomIntegerValue(startOfRange, endOfRange);
  const y = randomIntegerValue(startOfRange, endOfRange);

  switch (chooseRandomOperator) {
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
    case '*': {
      const question = `${x} * ${y}`;
      const rightAnswer = x * y;
      return [question, rightAnswer];
    }
    default: {
      return 'Error of choose random operator';
    }
  }
};

const startBrainCalc = () => GameProcess(instruction, roundOfGame);

export default startBrainCalc;
