import { runGame } from '../index.js'
import { randNum } from '../randomNumber.js'

const instruction = 'Find the greatest common divisor of given numbers.'
const getGcd = () => {
    const question = [];
    const x = randNum();
    const y = randNum();
    question.push(x, y);
    if (x === y) {
        const rightAnswer = x;
        return [question, rightAnswer];
    }
    let rightAnswer = 0;
    for (let i = 0; i <= x && i <= y; i += 1) {
        if (x % i === 0 && y % i === 0) {
            rightAnswer = i;
        }
    }
    return [question, rightAnswer];
}

const letGcdGame = () => {
    return runGame(instruction, getGcd);
}

export { letGcdGame };
