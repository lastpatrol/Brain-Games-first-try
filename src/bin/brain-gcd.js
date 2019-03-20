#!/usr/bin/env node

import { play } from '..';
import { objective, makeQuestionAndAnswer } from '../games/gcd';

play(objective, makeQuestionAndAnswer);
