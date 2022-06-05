import getPosts from './getPosts.js';
import deletePosts from './deletePosts.js';
import newPost from './newPost.js';
import readPost from './readPost.js';
import editPost from './editPost.js';

const renderPosts = (id) => {
   
    getPosts(id).then((posts) => {
        content.innerHTML = '';
        posts.forEach((post) => {
            const postContent = 
            `<div class="post" id="${post.id}">
                <h2 class="post__title">${post.title}</h2>
                <p class="post__text">
                    ${post.text}
                </p>
                <div class="post__box">
                    <div class="post__actions actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/899/899796.png" alt="read post" class="actions__icon actions__read">
                        <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="edit post" class="actions__icon actions__edit" >
                        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete post" class="actions__icon actions__delete">
                    </div>
                    <div class="post__date">
                        ${post.date}
                    </div>
                </div>
            </div>`;

            content.insertAdjacentHTML('afterbegin', postContent);
        })
        content.insertAdjacentHTML('beforeend', `<div class="post post_create" id="newPost"></div>`);
    })


    content.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        //create a new post
        if (e.target.classList.contains('post_create')) {
            const form = document.getElementById('newNote');

            form.classList.remove('hidden');
            form.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (e.target.classList.contains('accept-btn')) {
                    
                    if ( newPost() ) {
                        form.reset();
                        form.classList.add('form-out');
                        setTimeout(() => {     
                            form.classList.add('hidden');
                            form.classList.remove('form-out');
                        }, 500);
                    }
                }

                if (e.target.classList.contains('cancel-btn')) {
                    form.reset();
                    form.classList.add('form-out');
                    setTimeout(() => {     
                        form.classList.add('hidden');
                        form.classList.remove('form-out');
                    }, 500);
                }
            })
        }

        //read
        if (e.target.classList.contains('actions__read')) {
            const overlay = document.getElementById('overlay'),
                readBox = document.getElementById('read'),
                idPost = e.target.closest('.post').id;

            overlay.classList.remove('hidden');
            readBox.classList.remove('hidden');

            readPost(idPost);

            readBox.addEventListener('click', (e) => {
                e.preventDefault();

                if (e.target.classList.contains('cancel-btn')) {
                    readBox.classList.add('slide-top');
                    setTimeout(() => {     
                        readBox.classList.add('hidden');
                        overlay.classList.add('hidden');
                        readBox.classList.remove('slide-top');
                    }, 500);
                }
            })

        }
        //edit
        if (e.target.classList.contains('actions__edit')) {
            const overlay = document.getElementById('overlay'),
                readBox = document.getElementById('read'),
                idPost = e.target.closest('.post').id,
                editButton = readBox.querySelector('.accept-btn'),
                title = readBox.querySelector('.read__noteTitle'),
                text = readBox.querySelector('.read__noteText');

            overlay.classList.remove('hidden');
            readBox.classList.remove('hidden');
            editButton.classList.remove('hidden');
            title.disabled = false;
            text.disabled = false;
            readPost(idPost);
            readBox.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('accept-btn')) {
                    title.disabled = title.disabled ? false : true;
                    text.disabled = text.disabled ? false : true;
                    
                    editPost(idPost);
                }

                if (e.target.classList.contains('cancel-btn')) {
                    title.disabled = true;
                    text.disabled = true;

                    readBox.classList.add('slide-top');
                    setTimeout(() => {     
                        readBox.classList.add('hidden');
                        overlay.classList.add('hidden');
                        editButton.classList.add('hidden');
                        readBox.classList.remove('slide-top');
                    }, 500);
                }
            })
        }
        //delete
        if (e.target.classList.contains('actions__delete')) {
            const idPost = e.target.closest('.post').id,
            deleteForm = document.getElementById('delete-form'),
            overlay = document.getElementById('overlay');
            
            deleteForm.classList.remove('hidden');
            overlay.classList.remove('hidden');
            
            //delete post
            deleteForm.addEventListener('click', (e) => {
                e.preventDefault();

                if (e.target.classList.contains('delete__accept')) {
                    deletePosts(idPost);

                    deleteForm.classList.add('hideModal');
                    setTimeout(() => {     
                        deleteForm.classList.add('hidden');
                        overlay.classList.add('hidden');
                        deleteForm.classList.remove('hideModal');
                    }, 500);
                }

                if (e.target.classList.contains('delete__cancel')) {
                    deleteForm.classList.add('hideModal');
                    setTimeout(() => {     
                        deleteForm.classList.add('hidden');
                        overlay.classList.add('hidden');
                        deleteForm.classList.remove('hideModal');
                    }, 500);
                }
            })
        }
    })
}

export default renderPosts;