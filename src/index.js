import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('\nWelcome to the Brain Games!');
};

export const greetAndGetName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

export const playEven = () => {
  const objective = 'Answer "yes" if number is even, otherwise answer "no".\n';
  console.log(objective);

  const playerName = greetAndGetName();

  const getRandom = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const isEven = num => num % 2 === 0;

  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    console.log(`Question: ${num}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
