import readlineSync from 'readline-sync';

const startGame = (instruction, question, rightAnswer) => {

    console.log('Welcome to the Brain Games!');
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(instruction);
    const amountQuestions = 3;

    for (let i = 0; i < amountQuestions; i += 1) {
        const userAnswer = readlineSync.question(`Question: ${question} `);
        console.log(`Your answer: ${userAnswer}`);
        const wrongAnswer = `'${userAnswer}' is wrong answer; (.Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`;
        if (userAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            return console.log(wrongAnswer);
        }
    };
    console.log(`Congratulations, ${userName}!`);
}
export default startGame;
