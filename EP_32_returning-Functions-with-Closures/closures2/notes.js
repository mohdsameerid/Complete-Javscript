
// 2 closures is making 

function outer() {
    function parent() {
        const a = 4;
        const b = 6;

        function add() {
            console.log(a + b);
        }
        return add;
    }
    return parent();
}

const res = outer();
console.dir(res);   /// res fn with all the scopes values a, b because of the closure.