const storeShirt = () => {
    const form = document.querySelector('#shirtForm')
    
    form.addEventListener('submit', () => {
        console.log(form.elements.id.value)
            const data = {
                id: form.elements.id.value,
                color: form.elements.color.value,
                gender: form.elements.gender.value,
                size: form.elements.size.value,
                text: form.elements.text.value,   
            }

            if (localStorage) {
            localStorage.setItem(data.id, JSON.stringify(data))
            }
    })
}

export default storeShirt