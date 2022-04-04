import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('Answer "YES" if the number is even,otherwise answer "NO".');
const checkEven = () => {
  for (let i = 1; i <= round; i += 1) {
    const number = randomnumber(1, 100);
    console.log(`Question: ${number}`);

    const Answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (Answer === 'YES') {
        console.log('Correct!');
      } else {
        console.log(`'${Answer} is wrong Answer; (. Correct answer was 'YES'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (Answer === 'NO') {
        console.log('Correct!');
      } else {
        console.log(`'${Answer} is wrong Answer; (. Correct answer was 'NO'`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Gongratulations, ${userName}!`);
};

export default checkEven;
