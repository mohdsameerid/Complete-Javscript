

// Def -> `try-catch` is a JavaScript construct used for error handling.
// The code inside the `try` block is executed, and if an error occurs, it is caught by the `catch` block,
// allowing you to handle the error gracefully without crashing the program.


const user = {
    name: 'Samir',
    age: 24
}

// console.log(user.details.name); // This will throw an error because 'details' is undefined

// To handle such errors gracefully, we can use try-catch blocks

try {
    console.log(user.details.name);
}
catch (error) {
    console.log('An error occurred:', error.message);
}



// try catch in async-await

async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching user data:', error.message);
    }
}