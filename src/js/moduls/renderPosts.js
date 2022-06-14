import getPosts from './getPosts.js';

const renderPosts = (id) => {
    getPosts(id).then((posts) => {
        content.innerHTML = '';

        let htmlString = posts.map((post) => {
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
    })
}

export default renderPosts;