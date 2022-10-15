import startGame from '../src/index.js'

const instruction = 'What is the result of the expression?'
const operators = ['+', '-', '*'];
let question = [];
let rightAnswer = 0;
let x = 0;
let y = 0;

const getQuestion = () => {
    oper = operators[Math.floor(Math.random() * operators.length)];
    x = Math.round(Math.random() * 100);
    y = Math.round(Math.random() * 10);
    switch (oper) {
        case '+': {
            question = `${x} + ${y}`;
            rightAnswer = x + y;
        }
            break;
        case '-': {
            question = `${x} - ${y}`;
            rightAnswer = x - y;
        }
            break;
        default: {
            question = `${x} * ${y}`;
            rightAnswer = x * y;
        }
    }
}
//startGame(instruction)

export default startGame;
