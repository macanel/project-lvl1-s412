import readlineSync from 'readline-sync';

export default (description) => {
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(description);
  }
};
export const userName = () => {
  const putName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${putName}!`);
  return putName;
};

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const even = (maxNumberOfAnswers = 3) => {
  const usName = userName();
  const isEven = number => number % 2 === 0;
  for (let i = 1; i <= maxNumberOfAnswers; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
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
