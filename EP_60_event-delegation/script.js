const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardsList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

container.addEventListener('click', (e) => {
    if (e.target !== container) {
        e.target.remove()
    }
})


// Def -> We Have list of cards or Elements then we have to delete them so we attaches one addEventListener
    //   with them every cards or elements. 

    // we don't have to to the way because if we do this page become heavy. 

    // so we need to make reduce the addEventListener from the page by using 
    // 'addEventListener add in cards or elements parent' .



    // So we Call this "Event Delegation". 
