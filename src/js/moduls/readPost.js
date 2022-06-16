const readPost = (postId) => {
    return fetch(`https://my-json-server.typicode.com/1305burov/notes/posts/${postId}`)
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error(err);
    })
}

export default readPost;