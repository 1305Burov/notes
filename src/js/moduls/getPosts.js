const getPosts = (userId) => {
    return fetch(`http://localhost:1234/users/${userId}/posts`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
}

export default getPosts;