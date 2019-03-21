import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What is the result of the expression?';

const makeGameData = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operations = ['+', '-', '*'];
  const operatorIndex = getRandom(0, 2);

  const question = `${num1} ${operations[operatorIndex]} ${num2}`;
  let rightAnswer = '';

  switch (operatorIndex) {
    case 0:
      rightAnswer = String(num1 + num2);
      break;
    case 1:
      rightAnswer = String(num1 - num2);
      break;
    default:
      rightAnswer = String(num1 * num2);
  }

  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
