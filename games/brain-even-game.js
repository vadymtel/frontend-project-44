import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let userName = '';
let generatedNumber = 0;

const getUserName = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};

const brainEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const amountQuestions = 3;
    for (let i = 0; i < amountQuestions; i += 1) {
        generatedNumber = Math.round(Math.random() * 100);
        const answer = readlineSync.question(`Question: ${generatedNumber} `);
        console.log(`Your answer: ${answer}`)
        if (generatedNumber % 2 === 0 && answer === 'yes') {
            console.log('Correct!');
        }
        if (generatedNumber % 2 === 0 && answer !== 'yes') {
            return console.log(`'${answer}' is wrong answer; (.Correct answer was 'yes'.\nLet's try again, ${userName}`);

        }
        if (generatedNumber % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
        }
        if (generatedNumber % 2 !== 0 && answer !== 'no') {
            return console.log(`'${answer}' is wrong answer; (.Correct answer was 'no'.\nLet's try again, ${userName}`);
        }
    }
    console.log(`Congratulations, ${userName}!`)
};

export { brainEvenGame, getUserName };
