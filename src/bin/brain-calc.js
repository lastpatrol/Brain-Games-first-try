#!/usr/bin/env node

import { play } from '..';
import { objective, makeQuestionAndAnswer } from '../games/calc';

play(objective, makeQuestionAndAnswer);
