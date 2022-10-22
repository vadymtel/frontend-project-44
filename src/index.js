import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const GameProcess = (instruction, func) => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instruction);
  const amountQuestions = 3;

  for (let i = 0; i < amountQuestions; i += 1) {
    const [question, rightAnswer] = func();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default GameProcess;
