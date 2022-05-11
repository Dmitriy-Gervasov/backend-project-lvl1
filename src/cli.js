import readlineSync from 'readline-sync';

function playerGreeting() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default playerGreeting;
