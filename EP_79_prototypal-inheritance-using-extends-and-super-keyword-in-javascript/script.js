class Person {
  constructor() {
    console.log("Hello");
  }

  living() {
    console.log("Sweet Home")
  }
}

class User extends Person {
  constructor(firstName, lastName, age) {
    super();
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Student extends User {
  constructor(firstName, lastName, age, course) {
    super(firstName, lastName, age);
    this.course = course;
  }

  currentlyLiving() {
    console.log('Gurgaon')
  }
}

class Employee extends Student {
  constructor(firstName, lastName, age, designation) {
    super(firstName, lastName, age);
    this.designation = designation;
  }

  currentlyLiving() {
    console.log('Noida')
  }
}


const user1 = new User('Aman', 'Mishra', 32);
const student1 = new Student('Samir', 'Idrishi', 72, 'BCA');
const emp1 = new Employee("Atul", "Shubh", 44, "Asp.net Developer");


// this is the prtotypal inheritance.
// chaining would be like ->
//    emp1      // Prototype - Employee
//    |
//    student1  // Prototype - Student
//    |
//    user1     // Prototype - User
//    |
//    person    // Prototype Person
//    |
//    Object    //  Prototype object



// Suppose i Selected this also : 
// If We see this prototypal inheritance in Html ->
const h1Element = document.querySelector('h1');
console.dir(h1Element);
// output -> When we select the <h1></h1> element.

//   HTMLHeadingElement
//     |
//   HTMLElement
//     |
//   Element
//     |
//   Node
//     |
//   EventTarget
//     |
//   Object


const pElement = document.querySelector('p');
console.dir(h1Element);
// output -> When we select the <h1></h1> element.

//   HTMLParagraphElement
//     |
//   HTMLElement
//     |
//   Element
//     |
//   Node
//     |
//   EventTarget
//     |
//   Object






