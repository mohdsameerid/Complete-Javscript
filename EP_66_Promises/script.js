
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
const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

const promise = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', () => {
        resolve('Promise is resolved successfully');
    });
    rejectBtn.addEventListener('click', () => {
        reject('Promise is rejected');
    });
});

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


//// Chaining of Promises ////
promise
    .then((data) => {
        console.log(data);
        return 'Data from first then block';
    })
    .then((data) => {
        console.log(data);
        return 'Data from second then block';
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//  Note -> This grow as Vertically not Horizontally like CallBack hell.   