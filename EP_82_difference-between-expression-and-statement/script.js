

//  <----------------- Difference between Statement and Expression  --------------------------->


// before that take look at this code 
// Now Tell me the Difference in these two 
if (5 > 4) {  // this is Statement
    'true'
} else {
    'false'
}

(5 > 4) ? 'true' : 'false';  // this is Expression 



(5 > 4) ? 'true' : 'false';  // this is Expression 
// because we can do like this ->
// const res = (5 > 4) ? 'true' : 'false';

// but can not do like this :
// const res2 = if (5 > 4) {
//     'true'
// } else {
//     'false'
// }



// Note :-> Remember Expression with like Arithmetic expression we uses .
// ex:
// const res = a + b;




// All the loop is 'Statement' except one forEach.
// Ex:
// const res = for (let i = 1; i <= 5; i++) {      // this is not allowed
//     console.log(i);
// }


// let arr = [1, 2, 3];                            // this will work
// const res = arr.forEach(ele => {
//     console.log(ele);
// });
// console.log(res); // undefined




// function abc() {
//     if (5 > 4) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }

// console.log(abc());




// Def : Expression is something that we can store in our variable
//       and the opposite of that we can say : statement 