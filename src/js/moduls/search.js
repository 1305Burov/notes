import getPosts from './getPosts.js';
import renderPosts from './renderPosts.js';


const search = (id) => {
    const search = document.getElementById('searchInput');
    search.addEventListener('input', (e) => {
        
        getPosts(id).then((posts) => {
            let filtered = posts.filter((post) => {
                return post.title.toLowerCase().trim().includes(search.value);
            })

            if (filtered.length === 0) {
                content.innerHTML = 'Here are not such notes...';
            } else {
                content.innerHTML = '';
                let htmlString = filtered.map((post) => {
                    const date = post.updateTime ? post.updateTime : post.date;
        
                    return `
                        <div class="post" id="${post.id}">
                            <h2 class="post__title"><span>${post.title}</span></h2>
                            <p class="post__text">
                                ${post.text}
                            </p>
                            <div class="post__box">
                                <div class="post__actions actions">
                                <button><img src="https://cdn-icons-png.flaticon.com/512/899/899796.png" alt="read post" class="actions__icon actions__read"></button>
                                <button><img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="edit post" class="actions__icon actions__edit"></button>
                                <button><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete post" class="actions__icon actions__delete"></button>
                                </div>
                                <div class="post__date">
                                    ${date}
                                </div>
                            </div>
                        </div>
                    `
                }).join('');
        
                htmlString += `<div class="post post_create" id="newPost"></div>`;
                content.insertAdjacentHTML('afterbegin', htmlString);
            }
        })
    })

}

export default search;