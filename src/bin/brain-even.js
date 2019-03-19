#!/usr/bin/env node

import { play } from '..';
import { objective, makeQuestionAndAnswer } from '../games/even';

play(objective, makeQuestionAndAnswer);
