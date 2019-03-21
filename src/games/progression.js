import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What number is missing in the progression?';

const progressionAsString = (startValue, length, step, unknownPoint) => {
  const endValue = startValue + step * (length - 1);
  const unknownValue = startValue + step * unknownPoint;

  const iter = (value, acc) => {
    if (value > endValue) {
      return acc;
    }

    const newAddition = (value === unknownValue) ? '..' : value;
    const spaceAddition = (value === endValue) ? '' : ' ';
    return iter(value + step, `${acc}${newAddition}${spaceAddition}`);
  };

  return iter(startValue, '');
};

const makeGameData = () => {
  const progressionLength = 10;
  const unknownPoint = getRandom(0, progressionLength - 1);
  const step = getRandom(1, 21);
  const startValue = getRandom(1, 21);

  const rightAnswer = String(startValue + (step * unknownPoint));
  const question = progressionAsString(startValue, progressionLength, step, unknownPoint);

  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
