const deletePosts = (id) => {
    return fetch(`http://localhost:1234/posts/${id}`, {
        method: 'DELETE',
    })
    .catch((err) => {
        console.error(err);
    })
}

export default deletePosts;