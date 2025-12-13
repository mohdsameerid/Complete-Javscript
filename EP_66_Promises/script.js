
const p = new Promise((resolve, reject) => {
    resolve('This promise is resolved');
    // reject('This promise is rejected');
});

// console.log(p);


p.then((data) => {
    console.log('Inside then ', data);
}).catch((error) => {
    console.log('Inside catch ', error);
});