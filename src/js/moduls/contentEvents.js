import deletePosts from './deletePosts.js';
import readPost from './readPost.js';

const contentEvents = () => {
    content.addEventListener('click', (e) => {
        const overlay = document.getElementById('overlay');
        const readBox = document.getElementById('read');
        const title = readBox.noteTitle;
        const text = readBox.noteText;
        
        //create a new post
        if (e.target.classList.contains('post_create')) {
            document.getElementById('newNote').classList.remove('hidden');
        }

        //read
        if (e.target.classList.contains('actions__read')) {
            const idPost = e.target.closest('.post').id;

            overlay.classList.remove('hidden');
            readBox.classList.remove('hidden');

            readPost(idPost)
                .then((post) => {
                    readBox.dataset.idPost = idPost;
                    title.value = post.title;
                    text.value = post.text;
                    title.disabled = true;
                    text.disabled = true;
                })
        }

        //edit
        if (e.target.classList.contains('actions__edit')) {
            const idPost = e.target.closest('.post').id;
        
            overlay.classList.remove('hidden');
            readBox.classList.remove('hidden');

            readPost(idPost)
                .then((post) => {
                    readBox.dataset.idPost = idPost;
                    title.value = post.title;
                    text.value = post.text;
                    title.disabled = false;
                    text.disabled = false;
                })
        }

        //delete
        if (e.target.classList.contains('actions__delete')) {
            const deleteForm = document.getElementById('delete-form');
            const idPost = e.target.closest('.post').id;
            
            deleteForm.classList.remove('hidden');
            overlay.classList.remove('hidden');
            
            deleteForm.dataset.idPost = idPost
        }
    })
}

export default contentEvents;