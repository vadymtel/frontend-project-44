import { runGame } from '../index.js';
import { getRandomInt } from '../randomNumber.js';

const instruction = 'What number is missing in the progression?';
const getProgression = () => {
  const question = [];
  const beginOfProgres = getRandomInt(0, 100);
  question.push(beginOfProgres);
  const stepOfProgres = getRandomInt(beginOfProgres, 100);
  const maxLength = getRandomInt(5, 10);
  for (let i = 1; i < maxLength; i += 1) {
    question.push(beginOfProgres + stepOfProgres * i);
  }
  const rightAnswer = question.splice(getRandomInt(0, maxLength), 1, '..');
  return [question.join(' '), rightAnswer];
};

const letProgressionGame = () => runGame(instruction, getProgression);

export { letProgressionGame };
