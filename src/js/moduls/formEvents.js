import check from './formCheck.js';
import newPost from './newPost.js';
import editPost from './editPost.js';
import renderPosts from './renderPosts.js';
import deletePosts from './deletePosts.js';

const formEvents = () => {
    const userId = JSON.parse(localStorage.getItem("User")).id;
    const overlay = document.getElementById('overlay');
    // forms
    const newNoteForm = document.getElementById('newNote');
    const editForm = document.getElementById('read');
    const deleteForm = document.getElementById('delete-form')
    //close buttons
    const cancelNewNote = document.getElementById('cancelNote');
    const cancelDelete = document.getElementById('cancel-delete');
    const closeRead = document.getElementById('close-read');

    newNoteForm.addEventListener('submit', (e) => {
        const form = e.target; 
        const title = form.title;
        const text = form.text;
        
        e.preventDefault();
        
        let checkedText = check(title);
        let checkedTitle = check(text)
        
        if (checkedText && checkedTitle) {
            newPost( userId, title.value, text.value )
                .then(() => {
                    renderPosts(userId);            
                })

            close(form, 'form-out'); 
        }
    })

    editForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = e.target;
        const title = form.noteTitle;
        const text = form.noteText; 
        const postId = form.dataset.idPost;

        editPost( postId, title.value, text.value )
            .then(() => {
                title.disabled = title.disabled ? false : true;
                text.disabled = text.disabled ? false : true;
                
                renderPosts(userId);
            })
    })

    deleteForm.addEventListener('submit', e => {
        const form = e.target;
        const idPost = form.dataset.idPost;
        
        e.preventDefault();

        deletePosts(idPost).then(() => {
            renderPosts(userId);
            close(form, 'hideModal'); 
        })

    })

    cancelNewNote.addEventListener('click', (e) => {
        close(e.target.closest('form'), 'form-out');
    });
    
    cancelDelete.addEventListener('click', (e) => {
        close(e.target.closest('form'), 'hideModal');
    });

    closeRead.addEventListener('click', (e) => {
        close(e.target.closest('form'), 'slide-top');
    });

    function close(form, animationClass) {
        form.reset();
        form.classList.add(animationClass);
        let timerClose = setTimeout(() => {     
            form.classList.add('hidden');
            overlay.classList.add('hidden');
            form.classList.remove(animationClass);
            clearTimeout(timerClose);
        }, 500);
    }    
}

export default formEvents;