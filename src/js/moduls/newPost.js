const newPost = (userId, title, text) => {
    return fetch(`http://localhost:1234/posts`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            userId,
            title,
            text,
            date: new Date().toLocaleString().slice(0,-3)
        })
    })
    .catch((err) => {
        console.error(err);
    })
}

export default newPost;