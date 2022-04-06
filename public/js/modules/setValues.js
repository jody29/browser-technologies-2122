const setValues = () => {
    const shirt = JSON.parse(localStorage.getItem('savedShirt'))
    const form = document.querySelector('#shirtForm')

    if (shirt) {
    form.elements.id.value = form.elements.id.value
    form.elements.color.value = shirt.color
    form.elements.gender.value = shirt.gender
    form.elements.size.value = shirt.size
    form.elements.text.value = shirt.text
    }
}

export default setValues