import { makeStep, getRandom, play } from '..';

const isEven = num => num % 2 === 0;

export const objective = 'Answer "yes" if number even otherwise answer "no".\n';

export const makeQuestionAndAnswer = () => {
  const num = getRandom(1, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return makeStep(question, answer);
};

export const launch = () => play(objective, makeQuestionAndAnswer);
