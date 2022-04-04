import storeShirt from "./storeShirt.js"

const input = document.querySelectorAll('input[name="color"]')
const shirt = document.querySelector('#shirt')
const text = document.querySelector('#text')
const shirtText = document.querySelector('#shirtText')

if (shirtText) {
    shirtText.addEventListener('input', () => {
        text.innerHTML = shirtText.value
    })
}

input.forEach(element => {
    element.addEventListener('click', () => {
        shirt.setAttribute('fill', element.value)

        if (element.value === 'white') {
            text.setAttribute('fill', 'black') 
        } else {
            text.setAttribute('fill', 'white')
        }
    })
})

storeShirt()

