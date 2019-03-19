import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const welcome = () => {
  console.log('\nWelcome to the Brain Games!');
};

export const greetAndGetName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

export const makeStep = (question, answer) => cons(question, answer);
export const getQuestion = step => car(step);
export const getAnswer = step => cdr(step);

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const play = (objective, makeQuestionAndAnswer) => {
  welcome();
  console.log(objective);
  const playerName = greetAndGetName();

  for (let i = 0; i < 3; i += 1) {
    const step = makeQuestionAndAnswer();
    const question = getQuestion(step);
    const answer = getAnswer(step);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
