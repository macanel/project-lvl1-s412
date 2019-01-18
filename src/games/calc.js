import { cons } from 'hexlet-pairs';
import { getRandomNumber, gameTemplate } from '..';

const randomNumber1 = getRandomNumber(0, 50);
const randomNumber2 = getRandomNumber(0, 50);
const signSym = getRandomNumber(1, 3);

const calc = () => {
  let correctAnswer = 0;
  let question = '';
  switch (signSym) {
    case 1:
      correctAnswer = randomNumber1 + randomNumber2;
      question = `${randomNumber1} + ${randomNumber2}`;
      break;
    case 2:
      correctAnswer = randomNumber1 - randomNumber2;
      question = `${randomNumber1} - ${randomNumber2}`;
      break;
    default:
      correctAnswer = randomNumber1 * randomNumber2;
      question = `${randomNumber1} * ${randomNumber2}`;
  }

  return cons(question, correctAnswer);
};
gameTemplate(calc);
