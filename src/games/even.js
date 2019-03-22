import play from '..';
import { makeStep, getRandom } from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const makeGameData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
