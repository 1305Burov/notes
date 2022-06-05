const writeError = (input, errorText) => {
    input.style.borderColor = 'red';
    input.closest('label').querySelector('.error__text').textContent = `${errorText}`;
}

export default writeError;