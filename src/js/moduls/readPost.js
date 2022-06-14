const readPost = (postId) => {
    return fetch(`http://localhost:1234/posts/${postId}`)
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error(err);
    })
}

export default readPost;