import { cons } from 'hexlet-pairs';
import { getRandomNumber, gameTemplate } from '..';

const isEven = number => number % 2 === 0;

const taskDescription = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
export default () => gameTemplate(even, taskDescription);
