import { cons } from 'hexlet-pairs';
import { getRandomNumber, gameTemplate } from '..';

const taskDescription = 'Answer "yes" if number even otherwise answer "no".';

const division = (number1, number2) => {
  if (number1 < number2) {
    return division(number2, number1);
  }
  if (number2 === 0) {
    return number1;
  }
  return division(number2, number1 % number2);
};

const gcd = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(division(randomNumber1, randomNumber2));
  return cons(question, correctAnswer);
};

export default () => gameTemplate(gcd, taskDescription);
