const deletePosts = (id) => {
    fetch(`http://localhost:1234/posts/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        window.location.reload();
    }) 
}

export default deletePosts;