//select range inputs and get their current value
const spacingInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const baseInput = document.querySelector('#base');

//update value each time the input is adjusted
spacingInput.addEventListener('input', handleChange);
blurInput.addEventListener('input', handleChange);
baseInput.addEventListener('input', handleChange);


//functions to set css root value to reflect value of range input
function handleChange() {
    let value = this.value;
    let sizingSuffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, value + sizingSuffix);
}