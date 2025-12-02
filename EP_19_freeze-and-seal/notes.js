
let username = 'Anurag'

const user = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata: {
        city: 'Bangalore',
        pinCode: 876876,
        state: 'Karnataka',
        moreDetails: {
            population: 9798897897,
            area: '787 sq km',
        },
    },
    age: 15,
    isGraduate: false,
}

Object.seal(user) // can not delete, add. 
Object.freeze(user) // can not add, delete, modify

console.log('isGraduate' in user); // check key in present or not 