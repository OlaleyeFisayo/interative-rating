const button = document.querySelector('#submit');
const radios = document.querySelectorAll('input[type="radio"]')
const output = document.querySelector(".output")
const two = document.querySelector('.two')

console.log()

button.addEventListener('click', () => {
    radios.forEach(radio => {
        if(radio.checked) {
            return output.textContent = radio.value;
        }
    })
    two.classList.remove('hidden');
})