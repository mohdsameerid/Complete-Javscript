const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
// const firstImage = document.querySelector("img")

const paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// container.append(paragraph)

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

for (let i = 1; i <= 100; i++) {
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImg)
}

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container.append(newImage)







// My code ===========================================================================================================
// const h1 = document.querySelector('h1')
// const container = document.querySelector(".container")

// const imgElement = document.createElement('img');
// const pElement = document.createElement('p');
// const brElement = document.createElement('br');
// // const img = document.querySelector(".img")


// for (let i = 1; i <= 100; i++) {
//     const newImage = imgElement.cloneNode()
//     const pElementPage = pElement.cloneNode()
//     const brElementPage = brElement.cloneNode();
//     newImage.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
//     newImage.setAttribute("style", `height: 150px; width: 150px`);
//     newImage.alt = `pokemon-logo-${i}`
//     pElementPage.innerText = i;
//     brElementPage.innerHTML = `<br> </br>`
//     container.append(newImage, brElementPage, pElementPage);
// }


