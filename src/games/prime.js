import play from '..';
import { makeStep, getRandom } from '../utils';
import isPrime from 'prime-number';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGameData = () => {
  const question = getRandom(1, 200);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
