#!/usr/bin/env node
import { getUserInput } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const userName = getUserInput('May I have your name?');
console.log(`Hello, ${userName}!`);
