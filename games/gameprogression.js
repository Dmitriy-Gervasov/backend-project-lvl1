import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('What number is missing in the progression?');

const progression = () => {
  for (let i = 1; i <= round; i += 1) {
    const Number = randomnumber(1, 100);
    const step = randomnumber(2, 10);
    const ProgressionLenght = randomnumber(5, 10);

    let result;
    const massive = [Number];
    for (let k = 1; k <= ProgressionLenght; k += 1) {
      result = Number + (k * step);
      massive.push(result);
    }

    const IndexofMassive = massive[Math.floor(Math.random() * massive.length)];
    const numbertoString = IndexofMassive.toString();

    const unknownIndex = massive.indexOf(IndexofMassive);
    massive[unknownIndex] = '..';
    const str = massive.join(' ');

    console.log(`Question: ${str}`);
    const askAnswer = readlineSync.question('Your answer: ');

    if (askAnswer === numbertoString) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${IndexofMassive}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default progression;
