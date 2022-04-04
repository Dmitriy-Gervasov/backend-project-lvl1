import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('Find the greatest common divisor of given numbers.');

const gcd = () => {
  for (let i = 1; i <= round; i += 1) {
    const num1 = randomnumber(1, 100);
    const num2 = randomnumber(1, 100);

    const showEquation = `${num1} ${num2}`;
    console.log(`Question: ${showEquation}`);

    const askAnswer = readlineSync.question('Your answer: ');
    const Divisor = (n1, n2) => {
      let a = n1;
      let b = n2;
      if (a % b === 0) {
        return b;
      }
      while (b !== 0) {
        if (a > b) {
          a -= b;
        } else {
          b -= a;
        }
      }
      return a;
    };

    const result = String(Divisor(num1, num2));

    if (askAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
