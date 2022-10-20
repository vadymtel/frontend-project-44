import { runGame } from '../index.js'
import { randNum } from '../randomNumber.js'

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".'

const brainEvenGame = () => {
    const question = randNum();
    const isEven = String(question % 2);
    switch (isEven) {
        case '0': {
            const rightAnswer = 'yes';
            return [question, rightAnswer];
        }
        default: {
            const rightAnswer = 'no';
            return [question, rightAnswer];
        }
    }
};

const letEvenGame = () => runGame(instruction, brainEvenGame);

export { letEvenGame };
