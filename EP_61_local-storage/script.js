


const inputElement = document.querySelector('.class-name');
const nameElement = document.querySelector('.name-tag');

const ageElement = document.querySelector('.class-age');
const ageValue = document.querySelector('.age-tag');

const userData = {
    name: "_",
    age: "_"
}
nameElement.innerText = JSON.parse(localStorage.getItem('userData'))?.name || userData.name
ageValue.innerText = JSON.parse(localStorage.getItem('userData'))?.age || userData.age


inputElement.addEventListener('input', (e) => {
    userData.name = e.target.value
    localStorage.setItem('userData', JSON.stringify(userData))

    nameElement.innerText = e.target.value;
});

ageElement.addEventListener('input', (e) => {
    userData.age = e.target.value
    localStorage.setItem('userData', JSON.stringify(userData))
    ageValue.innerText = e.target.value;
});