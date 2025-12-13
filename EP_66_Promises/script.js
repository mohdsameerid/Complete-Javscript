
// const p = new Promise((resolve, reject) => {
//     resolve('This promise is resolved');
//     // reject('This promise is rejected');
// });

// // console.log(p);


// p.then((data) => {
//     console.log('Inside then ', data);
// }).catch((error) => {
//     console.log('Inside catch ', error);
// });





///////////// Promise with buttons /////////////
// const resolveBtn = document.querySelector('#resolve-btn');
// const rejectBtn = document.querySelector('#reject-btn');

// const promise = new Promise((resolve, reject) => {
//     resolveBtn.addEventListener('click', () => {
//         resolve('Promise is resolved successfully');
//     });
//     rejectBtn.addEventListener('click', () => {
//         reject('Promise is rejected');
//     });
// });

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


//// Chaining of Promises ////
// promise
//     .then((data) => {
//         console.log(data);
//         return 'Data from first then block';
//     })
//     .then((data) => {
//         console.log(data);
//         return 'Data from second then block';
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//  Note -> This grow as Vertically not Horizontally like CallBack hell.   



//// Event Loop - Macrotask vs Microtask ////
// These two are examples of Macrotask and Microtask in JavaScript Event Loop
// First microtasks are executed then macrotasks.

setTimeout(() => {                                    // Macrotask
    console.log('This is from setTimeout');
}, 0)


const myPromise = new Promise((resolve, reject) => {  // Microtask
    console.log('Promise is created');
    resolve('Promise is resolved');
});


myPromise.then((data) => {                            // Microtask
    console.log('Inside then ', data);
});


// output: // Promise is created
//         // Inside then  Promise is resolved
//         // This is from setTimeout