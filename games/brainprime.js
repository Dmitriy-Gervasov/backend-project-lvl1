import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const Prime = () => {
  for (let i = 1; i <= round; i += 1) {
    const Number = randomnumber(1, 100);

    console.log(`Question: ${Number}`);

    const primality = () => {
      for (let k = 2; k < Number; k += 1) {
        if (Number % k === 0) return false;
      }
      return Number > 1;
    };

    const askAnswer = readlineSync.question('Your answer: ');

    if (primality() === true) {
      if (askAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${askAnswer}' is wrong answer Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (primality() === false) {
      if (askAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${askAnswer}' is wrong answer Correct answer was 'no'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Gongratulations, ${userName}`);
};

export default Prime;
