import { cons } from 'hexlet-pairs';
import { getRandomNumber, gameTemplate } from '..';

const taskDescription = 'What is the result of the expression?';

const calc = () => {
  const randomNumber1 = getRandomNumber(0, 50);
  const randomNumber2 = getRandomNumber(0, 50);
  const signSym = getRandomNumber(1, 3);
  let correctAnswer = 0;
  let questionString = '';
  if (signSym === 1) {
    correctAnswer = randomNumber1 + randomNumber2;
    question = `${randomNumber1} + ${randomNumber2}`;
  } else if (signSym === 2) {
    correctAnswer = randomNumber1 - randomNumber2;
    question = `${randomNumber1} - ${randomNumber2}`;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
    question = `${randomNumber1} * ${randomNumber2}`;
  }

  return cons(questionString, correctAnswer);
};
export default () => gameTemplate(calc, taskDescription);
