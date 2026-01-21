/**
 * Built-in Object Methods
 * JavaScript provides several built-in methods to work with objects.
 * 
 * We have access to object instance methods like: .hasOwnProperty() and .valueOf(). 
 * There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys()
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
 * 
 */

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys();

console.log(robotKeys);

// Declare robotEntries below this line:


console.log(robotEntries);

// Declare newRobot below this line:


console.log(newRobot);