#!/usr/bin/env node
import { getUserAnswer } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const userName = getUserAnswer('May I have your name?');
console.log(`Hello, ${userName}!`);
