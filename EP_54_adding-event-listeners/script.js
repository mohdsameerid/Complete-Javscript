
let i = 0;

const pElement = document.querySelector(".p-tag");
const container = document.querySelector(".container");
pElement.innerText = "+"



pElement.addEventListener('click', () => {
    // pElement.innerText = i++;
    handleButton(i++);
});


function handleButton(i) {
    // switch (i) {
    //     case 11:
    //         breakageCall();
    //         return;
    //     case 21:
    //         breakageCall();
    //         return;
    //     case 31:
    //         breakageCall();
    //         return;
    //     case 41:
    //         breakageCall();
    //         return;
    //     case 51:
    //         breakageCall();
    //         return;
    //     case 61:
    //         breakageCall();
    //         return;
    //     case 71:
    //         breakageCall();
    //         return;
    //     case 81:
    //         breakageCall();
    //         return;
    //     case 91:
    //         breakageCall();
    //         return;
    //     case 101:
    //         breakageCall();
    //         return;

    // }

    breakageCall(i);
}



function breakageCall() {
    const pElementChild = document.createElement('p');
    pElementChild.classList.add('card');
    pElementChild.innerText = i;
    pElementChild.setAttribute('key', `key-${i}`)

    container.append(pElementChild);
}