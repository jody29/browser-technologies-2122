const saveShirt = () => {
    const form = document.querySelector('#shirtForm')
    const inputs = document.querySelectorAll('#shirtForm input, select')

    inputs.forEach(element => {
        element.addEventListener('change', () => {
            const data = {
                id: form.elements.id.value,
                color: form.elements.color.value,
                gender: form.elements.gender.value,
                size: form.elements.size.value,
                text: form.elements.text.value,
            }

            if (localStorage) {
                localStorage.setItem('savedShirt', JSON.stringify(data))
            }
        })
    })

    form.addEventListener('submit', () => {
        localStorage.clear()
    })
}

export default saveShirt