import renderPosts from './renderPosts.js';
import contentEvents from './contentEvents.js';
import formEvents from './formEvents.js';
import search from './search.js';


const renderAuth = () => {
    const authUser  = JSON.parse(localStorage.getItem('User')) || '{}';
    
    if (authUser.id) {
        const user = document.getElementById('user');
        const content = document.getElementById('content');
        const userName = user.children[1];

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
        formEvents();
        contentEvents();
        search(authUser.id);
    }
}



export default renderAuth;