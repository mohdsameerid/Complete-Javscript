// setTimeout

setTimeout("console.log('Hello')", 2000);
setTimeout("console.log('Hello')", 4000);
setTimeout("console.log('Hello')", 6000)


setTimeout(abc, 500);
function abc() {
    console.log("Hello");
}
// or 
setTimeout(() => {
    console.log("Hello");
}, 500);


// clearTimeout
const res = setTimeout(demo, 2000, ["Hello", "Hy", "bye"])
clearTimeout(res);
function demo() {
    console.log(arguments);
}