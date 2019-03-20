import play from '..';
import { makeStep, getRandom } from '../utils';

const objective = 'What is the result of the expression?';

const makeQuestionAndAnswer = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const numSmall = getRandom(1, 10);
  const operation = getRandom(1, 4);

  let question = '';
  let answer = '';

  switch (operation) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = String(num1 + num2);
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = String(num1 - num2);
      break;
    default:
      question = `${num1} * ${numSmall}`;
      answer = String(num1 * numSmall);
  }

  return makeStep(question, answer);
};

export default () => play(objective, makeQuestionAndAnswer);
