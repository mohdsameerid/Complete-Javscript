// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear () {
//       return new Date().getFullYear() - user.age
//     },
//   }
//   return user
// }


// const user1 = createUser('Aman', 'Mishra', 32)
// const user2 = createUser('Anurag', 'Singh', 72)

// const arr1 = [1,2]
// const arr2 = [3, 4]


// Now we create constructor function 
function CreateUser(firstName, lastName, age) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}

CreateUser.prototype.getAgeYear = function () {
  return new Date().getFullYear() - this.age;
}
CreateUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
}

const user1 = new CreateUser("Samir", "Idrishi", 90);
const user2 = new CreateUser("Anurag", "Singh", 25);

user2.getFullName === user1.getFullName // true

console.log(user1.getAgeYear()); // 1933
console.log(user2.getAgeYear()); // 1999

// Here, both user1 and user2 share the same getAgeYear method in memory from CreateUser.prototype.


// But now we have to use again and again prototype to add methods to our constructor function.
// To make it cleaner, we can use ES6 Classes in next chapter, which is syntactical sugar over prototype-based inheritance.


// Summary:
// In this chapter, we learned about constructor functions in JavaScript.
// We saw how they can be used to create multiple objects with shared methods using prototypes.
// This approach is more memory efficient compared to defining methods inside factory functions.


// Key Concepts:
// this keyword:
// In constructor functions, 'this' refers to the newly created object instance.
// example: 
function CreateUserExample(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}


// new Keyword:
// The 'new' keyword is used to create a new instance of an object using a constructor function.
// example: 
const user = new CreateUser("John", "Doe", 30);
console.log(user.firstName); // John  



// Prototype-based Inheritance:
// Methods defined on the constructor's prototype are shared among all instances, saving memory.
// example: 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.pop === arr2.pop; // true
// Here, both arr1 and arr2 share the same pop method from Array.prototype. 