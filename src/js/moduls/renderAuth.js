import renderPosts from './renderPosts.js';

const renderAuth = () => {
    const authUser  = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : false;
    
    if (authUser) {
        const user = document.getElementById('user'),
            content = document.getElementById('content'),
            userName = user.children[1];

        document.getElementById('search').classList.remove('hidden');
        form.classList.add('hidden');
        content.classList.remove('hidden');
        user.classList.remove('hidden');

        userName.textContent = authUser.login;

        document.getElementById('logout').addEventListener('click', () => {
            localStorage.removeItem('User');
            location.reload();
        })
        
        renderPosts(authUser.id);
    }
}



export default renderAuth;