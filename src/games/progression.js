import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeQuestionAndAnswer = () => {
  const unknownPoint = getRandom(0, progressionLength);
  const step = getRandom(1, 21);
  const startPointValue = getRandom(1, 21);

  const makeQuestion = (counter, acc) => {
    if (counter === progressionLength) {
      return acc;
    }
    const newPointValue = (counter === unknownPoint) ? '..' : startPointValue + (step * counter);
    const newAcc = `${acc}${newPointValue} `;
    return makeQuestion(counter + 1, newAcc);
  };

  const answer = startPointValue + (step * unknownPoint);
  const question = makeQuestion(0, '');

  return makeStep(question, answer);
};

export default () => play(description, makeQuestionAndAnswer);
