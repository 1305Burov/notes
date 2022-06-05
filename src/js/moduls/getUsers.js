const getUsers = () => {
    return fetch(`http://localhost:1234/users`)
    .then((res) => {
        return res.json();
    })
}   

getUsers().then((res) => {
    console.log(res);
})

export default getUsers;