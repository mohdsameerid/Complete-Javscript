


const evenNumbers = [0, 2, 10, 4, 61, 8]


const result = evenNumbers.some((num, i) => {
    return num % 2 === 1
})
// true

const result2 = evenNumbers.every((num) => {
    return num % 2 === 0
})
// false