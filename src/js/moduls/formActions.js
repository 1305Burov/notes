import auth from './auth.js';
import reg from './reg.js';
import check from './formCheck.js';

const formActions = () => {
    const form = document.getElementById('form');

    form.addEventListener('click', (e) => {
        const target = e.target;
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        
        e.preventDefault();
        
        const loginCheck = check(loginInput);
        const passCheck = check(passwordInput);
        
        if (loginCheck && passCheck) {
            if (target.id === 'reg') {
                reg(loginInput.value, passwordInput.value); 
            }

            if (target.id === 'login') {
                auth(loginInput.value.trim(), passwordInput.value.trim());
            }
        }
    });
}
 
export default formActions;