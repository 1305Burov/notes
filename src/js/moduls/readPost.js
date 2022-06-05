import getPosts from './getPosts.js';

const readPost = (postId) => {
    const readBox = document.getElementById('read');
    return fetch(`http://localhost:1234/posts/${postId}`)
    .then((res) => {
        return res.json();
    })
    .then((post) => {
        readBox.querySelector('.read__noteTitle').value = post.title;
        readBox.querySelector('.read__noteText').value = post.text;
    })
}

export default readPost;