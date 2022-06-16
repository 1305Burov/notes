const getUsers = () => {
    return fetch(`http://my-json-server.typicode.com/1305burov/notes/users`)
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error(err);
    }) 
}   

export default getUsers;