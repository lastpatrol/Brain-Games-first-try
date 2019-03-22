import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What is the result of the expression?';

const calcExpression = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

const makeGameData = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandom(0, operators.length - 1);

  const question = `${num1} ${operators[operatorIndex]} ${num2}`;
  const rightAnswer = String(calcExpression(num1, num2, operators[operatorIndex]));

  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
