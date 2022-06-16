const deletePosts = (id) => {
    return fetch(`https://my-json-server.typicode.com/1305burov.github.io/notes/posts/${id}`, {
        method: 'DELETE',
    })
    .catch((err) => {
        console.error(err);
    })
}

export default deletePosts;

// https://my-json-server.typicode.com/1305burov.github.io/notes
// http://localhost:1234/posts/${id}