import play from '..';
import { makeStep, getRandom } from '../utils';

const objective = 'What number is missing in the progression?';

const totalPoints = 10;

const makeQuestionAndAnswer = () => {
  const unknownPoint = getRandom(0, totalPoints);
  const step = getRandom(1, 21);
  const startPointValue = getRandom(1, 21);

  let answer = '';
  let question = '';

  for (let i = 0; i < totalPoints; i += 1) {
    const newPointValue = startPointValue + step * i;
    if (i === unknownPoint) {
      question = `${question}.. `;
      answer = `${newPointValue}`;
    } else {
      question = `${question}${newPointValue} `;
    }
  }

  return makeStep(question, answer);
};

export default () => play(objective, makeQuestionAndAnswer);
