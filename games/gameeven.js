import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('Answer "yes" if the number is even,otherwise answer "no".');
const checkEven = () => {
  for (let i = 1; i <= round; i += 1) {
    const number = randomnumber(1, 1000);
    console.log(`Question: ${number}`);

    const Answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (Answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${Answer} is wrong Answer; (. Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (Answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${Answer} is wrong Answer; (. Correct answer was 'no'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Gongratulations, ${userName}!`);
};

export default checkEven;
