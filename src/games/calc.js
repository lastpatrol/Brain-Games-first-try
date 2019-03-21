import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What is the result of the expression?';

const makeQuestionAndAnswer = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operatorPick = getRandom(1, 3);

  let operationSymbol = '';
  let rightAnswer = '';

  switch (operatorPick) {
    case 1:
      operationSymbol = '+';
      rightAnswer = String(num1 + num2);
      break;
    case 2:
      operationSymbol = '-';
      rightAnswer = String(num1 - num2);
      break;
    default:
      operationSymbol = '*';
      rightAnswer = String(num1 * num2);
  }

  const question = `${num1} ${operationSymbol} ${num2}`;

  return makeStep(question, rightAnswer);
};

export default () => play(description, makeQuestionAndAnswer);
