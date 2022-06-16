const deletePosts = (id) => {
    return fetch(`https://my-json-server.typicode.com/1305burov/notes/posts/${id}`, {
        method: 'DELETE',
    })
    .catch((err) => {
        console.error(err);
    })
}

export default deletePosts;