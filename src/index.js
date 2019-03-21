import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils';

const howManyRounds = 3;

export default (description, makeQuestionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i < howManyRounds; i += 1) {
    const step = makeQuestionAndAnswer();
    const question = getQuestion(step);
    const rightAnswer = getAnswer(step);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
