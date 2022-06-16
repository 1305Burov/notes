const getPosts = (userId) => {
    return fetch(`https://my-json-server.typicode.com/1305burov.github.io/notes/users/${userId}/posts`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.error(err);
        })
}

export default getPosts;


// https://my-json-server.typicode.com/1305burov.github.io/notes


// http://localhost:1234/users/${userId}/posts