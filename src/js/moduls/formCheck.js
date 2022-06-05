import writeError from './writeError.js';

const formCheck = (input) => {
    const isCorrect = input.classList.contains('noteText') || input.classList.contains('noteTitle') ? /^\S*/ : /^[A-Za-z0-9]\S*[^/\;!@#$%^&*()_]$/;

    if (input.value.trim().length >= 3) {
        if (isCorrect.test(input.value.trim())) {
            return true;
        }
        else {
            writeError(input, 'Invalid value');
        }
    }else {
        writeError(input, 'At least 3 symbols');
    }

    input.addEventListener('focus', () => {
        input.closest('label').querySelector('.error__text').textContent = '';
        input.style.borderColor = '';
    })


}

export default formCheck;