

const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

const body = document.querySelector('body')

// Event Bubbling ------------------------------------------------------------->
// blue.addEventListener('click', () => {
//     console.log("1 - blue clicked")
// }, { capture: false });

// window.addEventListener('click', () => {
//     console.log("6 - window clicked")
// }, { capture: false });

// pink.addEventListener('click', (e) => {
//     console.log("2 - pink clicked")
// }, { capture: false });

// window.document.addEventListener('click', () => {
//     console.log("5 - document clicked")
// }, { capture: false });

// green.addEventListener('click', () => {
//     console.log("3 - green clicked")
// }, { capture: false });

// body.addEventListener('click', () => {
//     console.log("4 - body clicked")
// }, { capture: false });



// Event Capturing ---------------------------------------------------->
// blue.addEventListener('click', () => {
//     console.log("1 - blue clicked")
// }, { capture: true });

// window.addEventListener('click', () => {
//     console.log("6 - window clicked")
// }, { capture: true });

// pink.addEventListener('click', (e) => {
//     console.log("2 - pink clicked")
// }, { capture: true });

// window.document.addEventListener('click', () => {
//     console.log("5 - document clicked")
// }, { capture: true });

// green.addEventListener('click', () => {
//     console.log("3 - green clicked")
// }, { capture: true });

// body.addEventListener('click', () => {
//     console.log("4 - body clicked")
// }, { capture: true });



// Particular event OFF 'Clicked' only once --------------------------->

blue.addEventListener('click', () => {
    console.log("Blue clicked only once")
}, { once: true });
