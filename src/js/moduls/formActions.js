import auth from './auth.js';
import reg from './reg.js';
import check from './formCheck.js';

const formActions = () => {
    const form = document.getElementById('form');

    form.addEventListener('click', (e) => {
        const target = e.target,
            loginInput = document.getElementById('loginInput'),
            passwordInput = document.getElementById('passwordInput');
        
        e.preventDefault();
        
        if (target.id === 'login') {
            let loginCheck = check(loginInput),
                passCheck = check(passwordInput);

            if (loginCheck && passCheck) {
                auth(loginInput.value.trim(), passwordInput.value.trim());
            }
        }

        if (target.id === 'reg') {
            let loginCheck = check(loginInput),
                passCheck = check(passwordInput);

            if (loginCheck && passCheck) {
                reg(loginInput.value, passwordInput.value);
            }
        }
    });
}
 
export default formActions;