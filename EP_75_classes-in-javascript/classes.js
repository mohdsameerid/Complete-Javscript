
// earlier we are doing like this -> 
function FunctionName() {
}

// in class -> 
class ClassName {
}


class CreateUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getAgeYear() {
        return new Date().getFullYear() - this.age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new CreateUser("Samir", "Idrishi", 25);
const user2 = new CreateUser("Anurag", "sS", 34);



// user2.getFullName === user1.getFullName // true


// Now using this class, it easy for us to create these getAgeYear, getFullName fn: inside the class. 
