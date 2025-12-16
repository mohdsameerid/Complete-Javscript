// Remember always: 95% -> When we object. something then 'this' will point towards current object.



// const user = {
//     name: "Samir",
//     age: 0,
//     getName() {
//         console.log(this) // current object
//     }
// }

// console.log(user.getName());

//////////////////////////////////////////////////////////////////////////////////////////////////

// const user = {
//     name: "Samir",
//     age: 0,
//     getName() {
//         function ABC() {
//             console.log(this) // this will point to window object
//         }
//         ABC();
//     }
// }

// console.log(user.getName());


///////////////////////////////////////////////////////////////////////////////////////////////////


const body = document.querySelector('body')

body.addEventListener('click', (e) => {
    console.log(e.target);          // <h1> 'this' keyword in JavaScript </h1>
    console.log(e.currentTarget);   //  whole body content and there Element
    console.log(this);              // window
})

