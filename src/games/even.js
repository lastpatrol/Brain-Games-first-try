import play from '..';
import { makeStep, getRandom } from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const makeQuestionAndAnswer = () => {
  const num = getRandom(1, 100);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return makeStep(question, answer);
};

export default () => play(description, makeQuestionAndAnswer);
