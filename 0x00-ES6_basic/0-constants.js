// 0-constants.js

import { getLast } from './getLast';

// Use const to declare the task variable
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
// Use let to declare the combination variable
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
