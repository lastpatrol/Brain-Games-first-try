import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (inputNum) => {
  if (inputNum < 2) {
    return false;
  }

  const iter = (num, counter) => {
    if (counter > num / 2) {
      return true;
    }

    if (num % counter === 0) {
      return false;
    }

    return iter(num, counter + 1);
  };

  return iter(inputNum, 2);
};

const makeGameData = () => {
  const question = getRandom(1, 99);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
