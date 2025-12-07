

const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

const body = document.querySelector('body')

// Def - Event Bubbling is When we click the event and goes from inside out and out of 
// the event till window 'object'
// event calling patten inside to outside , till window.

// Ex:
// <div class="green" >
//    <div class="pink">
//        <div class="blue"></div>
//    </div>
//</div >

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


// Def - Event capturing is When we click the event and goes from outside to inside.
// event calling patten outside to inside.

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
