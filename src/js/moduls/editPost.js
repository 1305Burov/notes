const editPost = (postId, title, text) => {
    return fetch(`http://localhost:1234/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title,
            text,
            updateTime: `${new Date().toLocaleString().slice(0,-3)} UPD`
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.error(err);
    })
}

export default editPost;