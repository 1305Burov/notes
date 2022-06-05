import check from './formCheck.js';
import renderPosts from './renderPosts.js';

const newPost = () => {
    const noteTextInput = document.getElementById('noteText'),
        noteTitleInput = document.getElementById('noteTitle');

    let checkedText = check(noteTextInput),
        checkedTitle = check(noteTitleInput),
        userId = JSON.parse(localStorage.getItem("User")).id;

    if ( checkedText && checkedTitle ) {
        return fetch(`http://localhost:1234/posts`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                "userId": userId,
                "title": noteTitleInput.value,
                "text": noteTextInput.value,
                "date": new Date().toLocaleString().slice(0,-3)
            })
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            renderPosts(userId);
            return true;            
        })
    }
}

export default newPost;