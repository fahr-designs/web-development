/**
 * Objects are collections of related data and functionality. 
 * We store that functionality in methods, which are functions that belong to the object.
 */

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};

goat.makeSound(); // Outputs: baaa


/**
 * The this keyword refers to the object that is executing the current method. 
 * In the example below, this.model refers to the model property of the robot object.
 */

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
  }
};

console.log(robot.provideInfo()); // Outputs: I am 1E78V2 and my current energy level is 100.

