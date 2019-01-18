import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const hello = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(description);
  }
  return '';
};
export const userName = () => {
  const putName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${putName}!`);
  return putName;
};

const maxNumberOfAnswers = 3;

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = number => number % 2 === 0;

export const even = () => {
  console.log(hello('Welcome to the Brain Games!'));
  console.log('Answer "yes" if number even otherwise answer "no".');
  const usName = userName();
  for (let i = 1; i <= maxNumberOfAnswers; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${usName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${usName}!`);
};

export const gameTemplate = (task, description) => {
  console.log(hello(description));
  const usName = userName();
  console.log(`Hello, ${usName}!`);
  for (let i = 1; i <= maxNumberOfAnswers; i += 1) {
    const gameConditions = task();
    const taskString = car(gameConditions);
    console.log(`Question: ${taskString}`);
    const correctAnswer = String(cdr(gameConditions));
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${usName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${usName}!`);
};

export default hello;
export { getRandomNumber };
