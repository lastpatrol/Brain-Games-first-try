import { makeStep, getRandom } from '..';

export const objective = 'Find the greatest common divisor of given numbers.\n';

export const makeQuestionAndAnswer = () => {
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

  const num1 = getRandom(1, 101);
  const num2 = getRandom(1, 101);
  const gcd = findGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = `${gcd}`;
  return makeStep(question, answer);
};
