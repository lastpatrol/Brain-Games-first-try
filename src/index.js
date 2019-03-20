import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils';

const greetAndGetName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const printEmptyLine = () => console.log('');
const printWelcome = () => console.log('Welcome to the Brain Games!');

const howManyRounds = 3;

export default (description, makeQuestionAndAnswer) => {
  printEmptyLine();
  printWelcome();
  console.log(description);
  printEmptyLine();
  const playerName = greetAndGetName();
  printEmptyLine();

  for (let i = 0; i < howManyRounds; i += 1) {
    const step = makeQuestionAndAnswer();
    const question = getQuestion(step);
    const answer = String(getAnswer(step));

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
