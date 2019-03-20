import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (one, two) => {
  const iter = (a, b, counter, acc) => {
    if (counter > a || counter > b) {
      return acc;
    }
    const newAcc = (a % counter === 0 && b % counter === 0) ? counter : acc;
    return iter(a, b, counter + 1, newAcc);
  };
  return iter(one, two, 1, 1);
};

const makeQuestionAndAnswer = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2);
  return makeStep(question, answer);
};

export default () => play(description, makeQuestionAndAnswer);
