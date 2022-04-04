import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, randomnumber } from '../scr/index.js';

const round = 3;

console.log('What is the result of the expression?');
const calc = () => {
  for (let i = 1; i <= round; i += 1) {
    const operations = ['+', '-', '*'];
    const getRandomOperator = operations[Math.floor(Math.random() * operations.length)];

    const num1 = randomnumber(1, 99);
    const num2 = randomnumber(1, 99);

    let getRandomOperation;

    const showEquation = `${num1} ${getRandomOperator} ${num2}`;
    console.log(`Question: ${showEquation}`);

    const askAnswer = readlineSync.question('Your answer: ');

    if (getRandomOperator === '+') {
      getRandomOperation = `${num1 + num2}`;
    }
    if (getRandomOperator === '-') {
      getRandomOperation = `${num1 - num2}`;
    }
    if (getRandomOperator === '*') {
      getRandomOperation = `${num1 * num2}`;
    }

    if (askAnswer === getRandomOperation) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${getRandomOperation}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
