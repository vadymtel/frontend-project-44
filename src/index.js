import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const startGame = (instruction, getQuestionAndAnswer) => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instruction);
  const amountOfRounds = 3;

  for (let i = 0; i < amountOfRounds; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
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
export default startGame;
