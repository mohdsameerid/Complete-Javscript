

// arguments keyword only work on the normal function not a arrow function

function printArguments() {
    console.log(arguments[0])
}
printArguments(2, 4, 5, 6, 4, 3, 6, 98);


function printArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.table(arguments[i])
    }
}


const printArguments = () => {                    // can not do this with arguments keyword,
    for (let i = 0; i < arguments.length; i++) {   // instead use the ES6 rest operator
        console.table(arguments[i])
    }
}

const printArguments = (...nums) => {            // do this instead.       
    for (let i = 0; i < nums.length; i++) {
        console.table(nums[i])
    }
}
printArguments(2, 4, 5, 6, 4, 3, 6, 98);


// question ->
function printArguments() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    return arr.reduce((a, c) => a + c, 1);
}
console.log(printArguments(2, 4, 5, 6, 4, 3, 6, 98));

