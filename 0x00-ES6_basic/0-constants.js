// 0-constants.js

// Use const to declare the task variable
export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

// Import the getLast function
export function getLast() {
  return " is okay";
}

// Use let to declare the combination variable
export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
