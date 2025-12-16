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