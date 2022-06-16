import check from './formCheck.js';
import auth from './auth.js';

const reg = (login, password) => {
    fetch(`https://my-json-server.typicode.com/1305burov.github.io/notes/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login,
            password,
        })
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        auth(login, password);
    })
}

export default reg;


// https://my-json-server.typicode.com/1305burov.github.io/notes

// http://localhost:1234/users