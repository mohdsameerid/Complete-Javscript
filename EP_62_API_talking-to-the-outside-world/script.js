

const getImage = document.querySelector('button');
const imageElement = document.querySelector('img');


getImage.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            imageElement.src = data.message;
        })
});







////////////////////////////////////////////////////////////////
// JSON and Object are same but there is slight differences ->
// JSON is string format where as Object is key value pair format

// 1️⃣ JSON (JavaScript Object Notation) ->
// 📌 JSON is a data format
// Used to store and transfer data
// Always a string
// Has strict rules

// ✔ JSON Rules ->
// Keys must be in double quotes " "
// Strings must be in double quotes " "
// No functions
// No comments
// No trailing commas

// ✔ JSON Example
// {
//   "name": "Samir",
//   "age": 23,
//   "skills": ["JS", "React"],
//   "isStudent": false
// }



// 2️⃣ JavaScript Object ->
// 📌 A JavaScript object is a real object stored in memory.
// NOT a string
// You can use functions
// Keys don’t always need quotes
// You can write trailing commas
// You can add comments
// You can modify it anytime

// ✔ JavaScript Object Example ->
// const user = {
//   name: "Samir",
//   age: 23,
//   skills: ["JS", "React"],
//   isStudent: false,
//   greet() {
//     console.log("Hello");
//   }
// };



// 🔁 Convert JSON ↔ JavaScript Object  ----------->
// JSON → JS Object
// const json = '{"name":"Samir","age":23}';

// const obj = JSON.parse(json);
// console.log(obj.name);


// JS Object → JSON
// const obj = { name: "Samir", age: 23 };

// const json = JSON.stringify(obj);
// console.log(json);