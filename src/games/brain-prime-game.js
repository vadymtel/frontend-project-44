import { runGame } from '../index.js'
import { getRandomInt } from '../randomNumber.js'

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getPrime = () => {
    const question = getRandomInt(0, 100);
    for (let i = 2; i < question; i += 1) {
        if (question % i === 0) {
            const rightAnswer = 'no';
            return [question, rightAnswer];
        }
    }
    const rightAnswer = 'yes';
    return [question, rightAnswer];
};

const letPrimeGame = () => runGame(instruction, getPrime);

export { letPrimeGame };
