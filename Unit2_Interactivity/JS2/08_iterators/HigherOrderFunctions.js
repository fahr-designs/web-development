/**
 * Higher-Order Functions
 *
 * Higher-order functions are functions that either accepts functions as parameters, returns a function, or both! 
 * We call functions that get passed in as parameters callback functions. 
 * Callback functions get invoked during the execution of the higher-order function.
 * 
 */

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc); // Returns: "I just invoked anotherFunc as a callback function!"
