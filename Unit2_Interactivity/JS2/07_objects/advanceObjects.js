/**
 * Objects are collections of related data and functionality.
 * We store that functionality in methods, which are functions that belong to the object.
 */

const goat = {
    dietType: "herbivore",
    makeSound() {
        console.log("baaa");
    },
};

goat.makeSound(); // Outputs: baaa

/**
 * The this keyword refers to the object that is executing the current method.
 * In the example below, this.model refers to the model property of the robot object.
 *
 *  Privacy convention: underscore before property name indicates that it should not be directly accessed from outside the object
 */

const person = {
    _firstName: "John",
    _lastName: "Doe",
    // Getters are methods that get and return the internal properties of an object.
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
};

console.log(person.fullName); // Outputs: John Doe


/**
 * Combining Getters and Setters
 */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  // setter methods reassign values of existing properties within an object
  set numOfSensors(num) {
    if(typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

console.log(`# of sensors before: ${robot.numOfSensors}`); // Outputs: 15

robot.numOfSensors = 100; // Using the setter to update the number of sensors

console.log(`# of sensors after: ${robot.numOfSensors}`); // Outputs: 100


/** * Factory Functions
 * Factory functions are functions that return an object.
 */

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("Beep Boop");
        }
    };
}

const tinCan = robotFactory("P-500", true);
const robot2 = robotFactory("P-333", false);

tinCan.beep(); // Outputs: Beep Boop
robot2.beep(); // Outputs: Beep Boop

console.log(tinCan.model); // Outputs: P-501
console.log(tinCan.mobile); // Outputs: true
console.log(robot2.model); // Outputs: P-333
console.log(robot2.mobile); // Outputs: false


/** * Property Value Shorthand
 * When the property name and variable name are the same, you can use the shorthand syntax.
 * This can make your code more concise and easier to read since you don't have to repeat the names.
 */

const robotFactoryShorthand = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log("Beep Boop");
        }
    };
}

/**
 * Object Destructuring
 * Object destructuring allows you to extract properties from an object and assign them to variables.
 * 
 * Syntax example:
 * const { property1, property2 } = objectName;
 */

const robot3 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
    
const { functionality } = robot3;

functionality.beep();