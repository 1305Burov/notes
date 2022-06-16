const getUsers = () => {
    return fetch(`https://my-json-server.typicode.com/1305burov.github.io/notes/users`)
    .then((res) => {
        return res.json();
    })
}   

getUsers().then((res) => {
    console.log(res);
})

export default getUsers;

// https://my-json-server.typicode.com/1305burov.github.io/notes
// http://localhost:1234/users