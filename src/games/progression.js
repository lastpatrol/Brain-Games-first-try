import play from '..';
import { makeStep, getRandom } from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const makeString = (startValue, step, unknownPoint) => {
  const iter = (counter, acc) => {
    if (counter === length) {
      return acc;
    }

    const newAddition = (counter === unknownPoint) ? '..' : startValue + step * counter;
    const spaceAddition = (counter === length - 1) ? '' : ' ';
    return iter(counter + 1, `${acc}${newAddition}${spaceAddition}`);
  };

  return iter(0, '');
};

const makeGameData = () => {
  const unknownPoint = getRandom(0, length - 1);
  const step = getRandom(1, 21);
  const startValue = getRandom(1, 21);

  const rightAnswer = String(startValue + (step * unknownPoint));
  const question = makeString(startValue, step, unknownPoint);

  return makeStep(question, rightAnswer);
};

export default () => play(description, makeGameData);
