import getUsers from './getUsers.js';
import renderAuth from './renderAuth.js';

const auth = (login, password) => {
    let auth = false;

    getUsers().then((res) => {
        for (let i in res) {
            if (login === res[i].login && password === res[i].password ) {
                auth = true;
                localStorage.setItem('User', JSON.stringify(res[i]));
                renderAuth();
                break;
            }
        }
        if (!auth) alert('Invalid login or password!');
    })

}

export default auth;