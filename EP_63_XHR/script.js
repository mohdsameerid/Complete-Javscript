

const getImageButton = document.querySelector('button');
const imageElement = document.querySelector('img');


getImageButton.addEventListener('click', () => {
    // fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(res => res.json())
    //     .then(data => {
    //         imageElement.src = data.message;
    //     })

    debugger;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        imageElement.src = xhr.response.message
    });
    xhr.send();   // request is sent here
});





// Note -> Before fetch  we used XMLHttpRequest to make network requests.
// when we used to send data xmlhttprequest had some issues like CORS etc. so fetch is used now a days.