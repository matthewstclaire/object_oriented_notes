'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const matt = new Person('Matt', 1993);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

matt.calcAge();
