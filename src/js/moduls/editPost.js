// import readPost from './readPost.js';
// import renderPosts from './renderPosts.js';

const editPost = (postId) => {
    const readBox = document.getElementById('read'),
        userId = JSON.parse(localStorage.getItem("User")).id;

    fetch(`http://localhost:1234/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: readBox.querySelector('.read__noteTitle').value,
            text: readBox.querySelector('.read__noteText').value,
            date: `${new Date().toLocaleString().slice(0,-3)} UPD`
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(() => {
        window.location.reload();
    })
}

export default editPost;