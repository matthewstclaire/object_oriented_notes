'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const matt = new Person('Matt', 1993);

// //prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// matt.calcAge();

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed} is how much faster you are going.`);
// };

// const car1 = new Car('bmw', 120);

// car1.accelerate();
// car1.accelerate();

//class declaration
// class PersonClass {
//   constructor(name, birthdate) {
//     this.name = name;
//     this.birthdate = birthdate;
//   }
//   calcAge() {
//     console.log(2037 - this.birthdate);
//   }
// }

// const matt = new PersonClass('Matt', 1993);
// console.log(matt);

// matt.calcAge();

//reading properties. Awesome way to do it.
// const account = {
//   owner: 'Matt',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   //always needs one param
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// //creating static method
// static hey() {
//     console.log('Hey there')
//     console.log(this)
// }

// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }
// const ford = new Car('Ford', 120);

// console.log(ford.speedUS);

//use extend for inheriting with es6 class

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}
