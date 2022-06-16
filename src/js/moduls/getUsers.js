const getUsers = () => {
    return fetch(`http://localhost:1234/users`)
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error(err);
    }) 
}   

export default getUsers;