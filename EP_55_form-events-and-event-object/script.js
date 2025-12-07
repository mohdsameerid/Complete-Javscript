

const userElement = document.querySelector("#username");
const form = document.querySelector("form");

// userElement.addEventListener("click", () => {
//     console.log("username clicked");
// })

// userElement.addEventListener("dblclick", () => {
//     console.log("username double clicked");
// })

let value = ""

userElement.addEventListener("input", (e) => {
    value += e.target.value;
    console.log(e.type);
})


form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.type);
    console.log(value);
})
