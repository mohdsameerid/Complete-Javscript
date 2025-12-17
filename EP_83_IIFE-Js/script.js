
// Def -> Immediately Invoked Function Expression (IIFE)

const { useEffect } = require("react");


// Different Way to create a IIFE ------>

(function abc() {
    console.log('IIFE- 1');
})();

(function abc() {
    console.log('IIFE- 2');
}());

((function abc() {
    console.log('IIFE- 3');
})());

+function abc() {
    console.log('IIFE- 4');
}();

-function abc() {
    console.log('IIFE- 5');
}();

!function abc() {
    console.log('IIFE- 6');
}();

~function abc() {
    console.log('IIFE- 7');
}();

true && function abc() {
    console.log('IIFE- 8');
}();

false || function abc() {
    console.log('IIFE- 9');
}();

void function abc() {
    console.log('IIFE- 10');
}();

new function abc() {
    console.log('IIFE- 11');
}();

true ?
    function abc() {
        console.log('IIFE- 12');
    }() : ""

true && (() => {
    console.log('IIFE- 13');
})();

const a = (function () {
    console.log("IIFE- 14");
})();



// real life working  ->

// const h1Element = document.querySelector('h1');
// const pElement = document.querySelector('p');
// const someElement = document.querySelector('.some');
// const btnElement = document.querySelector('.btn');
// const eElement = document.querySelector('.e');
// const abhElement = document.querySelector('.abh');
// const aElement = document.querySelector('a');
// const spanElement = document.querySelector('span');

// h1Element.style.backgroundColor = "pink"
// h1Element.style.textDecorationStyle = 'underline'
// h1Element.style.fontStyle = "40px"
// pElement.style.fontStyle = "30px"
// pElement.style.color = "red"



// So, we added all the element in varible in window and this is bad approach.  


// so we do this instead 


// (function () {
//     const h1Element = document.querySelector('h1');
//     const pElement = document.querySelector('p');
//     const someElement = document.querySelector('.some');
//     const btnElement = document.querySelector('.btn');
//     const eElement = document.querySelector('.e');
//     const abhElement = document.querySelector('.abh');
//     const aElement = document.querySelector('a');
//     const spanElement = document.querySelector('span');

//     h1Element.style.backgroundColor = "pink"
//     h1Element.style.textDecorationStyle = 'underline'
//     h1Element.style.fontStyle = "40px"
//     pElement.style.fontStyle = "30px"
//     pElement.style.color = "red"
// })();







// and In React we use this also ---->  


useEffect(() => {
    (async function () {
        const data = await fetch('https://dummyjson.com/products');
        const res = await data.json();
        console.log(res);
    }())
}, [])

