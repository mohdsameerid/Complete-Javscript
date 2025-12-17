


// for (var i = 1; i <= 3; i++) {
//     console.log("var " + i);
// }
// output:
// 1
// 2
// 3


// for (let i = 1; i <= 3; i++) {
//     console.log("let  " + i);
// }
// output:
// 1
// 2
// 3


// but If we added the setTimeout then :---> 

// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log("var " + i);
//     }, 1000);
// }
// output:
// var 4
// var 4
// var 4
// Note: It Created the variable and assign value again and again with the same memory location.


// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log("let  " + i);
//     }, 1000);
// }
// output:
// let 1
// let 2
// let 3 
// Note: It create new block every time and inside that block create i variable with the updated value.





// You can see this using : 
let arr = [];

for (let i = 1; i <= 3; i++) {

    const callBack = () => {
        console.log("let  " + i);

    }
    arr.push(callBack);
    setTimeout(callBack, 1000);
}

