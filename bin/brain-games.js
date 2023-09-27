#!/usr/bin/env node
import greetings from '../src/cli.js';
import evenGame from './brain-even.js';

const userName = greetings();
evenGame(userName);
