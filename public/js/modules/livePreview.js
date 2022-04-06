const livePreview = () => {
    const input = document.querySelectorAll('input[name="color"]')
    const shirt = document.querySelector('#shirt')
    const text = document.querySelector('#text')
    const shirtText = document.querySelector('#shirtText')
    const savedShirt = JSON.parse(localStorage.getItem('savedShirt'))
    
    if (shirtText) {
        shirtText.addEventListener('input', () => {
            text.innerHTML = shirtText.value
        })

        if(localStorage && savedShirt) {
            text.innerHTML = savedShirt.text
            shirt.setAttribute('fill', savedShirt.color)
            
            if (savedShirt.color === 'white') {
                text.setAttribute('fill', 'black')
            } else {
                text.setAttribute('fill', 'white')
            }
        }
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
}

export default livePreview