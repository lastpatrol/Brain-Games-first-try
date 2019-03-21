import { cons, car, cdr } from 'hexlet-pairs';

export const makeStep = (question, answer) => cons(question, answer);
export const getQuestion = step => car(step);
export const getAnswer = step => cdr(step);

export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
