


// hoisting ->
// We can use the 'var' variable and function before even initialize them. 
// So, 'var' variable and functions are hoisted and you use them.


// 'let' and 'const' are also hoisted. but we can not use them with the initialize some value. 
// why -> 

// memory in js -> 
// 'var' are created in the global scope 
// and 
// 'let' and 'const' are in the block/ script scope 


// but Impotant 'let' and 'const' they are also hoisted. 


// ex: ->
console.log(a);                 // undefined
var a = "Samir";                // Hoisted

hi()                            // Hello
function hi() {                 // Hoisted
    console.log('Hello');
}


// Function Definition
function abcd() {
    console.log("Function Declaration")
}

// Function Definition
let abc = function () {
    console.log("Function Expression")
}