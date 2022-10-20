import { runGame } from '../index.js'
import { randNum } from '../randomNumber.js'

const instruction = 'What is the result of the expression?'
const getQuestion = () => {
    const operators = ['+', '-', '*'];
    const oper = operators[Math.floor(Math.random() * operators.length)];
    const x = randNum();
    const y = randNum();

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
}

const letCalc = () => {
    return runGame(instruction, getQuestion);
}

export { letCalc };
