
// Closures -> Function + their lexical environment  forms a closures

// One closures is making 

function parent() {
    const a = 4;
    const b = 6;

    function add() {
        console.log(a + b);
    }
    return add;
}

const res = parent();
console.dir(res);   /// res fn with all the scopes values a, b because of the closure.