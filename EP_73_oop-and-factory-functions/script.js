

const user = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 25,
  getAge: function () {
    return new Date().getFullYear() - user.age;
  }
}

const user2 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 15,
  getAge: function () {
    return new Date().getFullYear() - user2.age;
  }
}


// Now We have to create multiple user objects like this.
//  This approach is not scalable and efficient. To solve this problem,
//  we can use Factory Functions or Constructor Functions to create user objects.



function createUser() {
  const users = {
    'firstName': 'Anurag',
    'lastName': 'Singh',
    'age': 25,
  }

  return users;
}

// We can also pass parameters to make it more dynamic.

function createUser(firstName, lastName, age) {
  const users = {
    'firstName': firstName,
    'lastName': lastName,
    'age': age,
  }

  return users;
}

// With ES6, we can use shorthand property names to make it even cleaner.
// and this is the final version of our factory function.
function createUser(firstName, lastName, age) {
  const users = {
    firstName,
    lastName,
    age,
  }

  return users;
}

createUser("Samir", "Idrishi", 90)
createUser("Anurag", "Singh", 25)
// And we can create as many user objects as we want using this factory function.



function newCreateUser(firstName, lastName, age) {
  const users = {
    firstName,
    lastName,
    age,
    getAge() {
      return new Date().getFullYear() - age;
    }
  }

  return users;
}

const newUser1 = newCreateUser("Samir", "Idrishi", 90);
const newUser2 = newCreateUser("Anurag", "Singh", 25);


// So the address of getAge method will be different for both objects.
console.log(newUser1.getAge === newUser2.getAge); // false



// To solve this problem, we can use Prototype-based Inheritance or Classes in JavaScript.


// like : 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.pop === arr2.pop; // true
// Here, both arr1 and arr2 share the same pop method from Array.prototype.

