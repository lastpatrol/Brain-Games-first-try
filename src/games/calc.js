import play from '..';
import { makeStep, getRandom } from '../utils';

const objective = 'What is the result of the expression?';

const makeQuestionAndAnswer = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operatorPick = getRandom(1, 4);

  let operationSymbol = '';
  let answer = '';

  switch (operatorPick) {
    case 1:
      operationSymbol = '+';
      answer = String(num1 + num2);
      break;
    case 2:
      operationSymbol = '-';
      answer = String(num1 - num2);
      break;
    default:
      operationSymbol = '*';
      answer = String(num1 * num2);
  }

  const question = `${num1} ${operationSymbol} ${num2}`;

  return makeStep(question, answer);
};

export default () => play(objective, makeQuestionAndAnswer);
