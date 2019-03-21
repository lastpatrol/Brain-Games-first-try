import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  const larger = a > b ? a : b;
  const smaller = a < b ? a : b;

  if (larger % smaller === 0) {
    return smaller;
  }

  return findGcd(smaller, larger % smaller);
};

const makeQuestionAndAnswer = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(findGcd(num1, num2));
  return makeStep(question, rightAnswer);
};

export default () => play(description, makeQuestionAndAnswer);
