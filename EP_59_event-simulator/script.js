const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

// Event Simulation 
// Def -> Simulating a click in JavaScript means triggering a click event on an HTML 
//        element using code, rather than requiring manual user interaction.
//        This technique is useful for automating actions like 
//        clicking buttons, links, or other interactive elements, enhancing web functionality, 
//        and triggering hidden or background processes.


// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//  addCardBtn.click(); ---------------->  Element click 'simulation'
// const time = setInterval(() => {
//     if (count <= 100) {
//         addCardBtn.click();
//     }
//     else {
//         clearInterval(time);
//     }
// }, 50);



const input = document.querySelector('input');

// input.focus(); ----> input box focus 'simulation'
// setTimeout(() => {
//     input.focus();    // on focus called  
//     console.log("focus called")
// }, 3000);

// input.blur(); ------> input box blur 'simulation'
// setTimeout(() => {
//     input.blur();      // on blur called
//     console.log("blur called");
// }, 6000);

// ------------> input form reset 'simulation'
form.reset(); // form reset

// ------------> input form submit 'simulation'
form.submit(); // form submit 