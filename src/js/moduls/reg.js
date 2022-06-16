import check from './formCheck.js';
import auth from './auth.js';

const reg = (login, password) => {
    fetch(`https://my-json-server.typicode.com/1305burov/notes/users`, {
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
    .then(() => {
        auth(login, password);
    })
    .catch((err) => {
        console.error(err);
    }) 
}

export default reg;