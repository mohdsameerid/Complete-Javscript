
// Def -> Immediately Invoked Function Expression (IIFE)


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
