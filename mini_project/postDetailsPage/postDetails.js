const url = new URL(location.href);
const data = url.searchParams.get('dataPost');
const post = JSON.parse(data);

const postDetailsMain = document.getElementsByClassName('postDetailsMain')[0];

const postDiv = document.createElement('div');
postDiv.classList.add('postDiv');
postDiv.innerHTML = `
    <p class="pPostDiv">ID: ${post.id}  UserID: ${post.userId}</p>
    <h2>
        ${post.title[0].toUpperCase() + post.title.slice(1)}
    </h2>
    <p>${post.body[0].toUpperCase() + post.body.slice(1)}.</p>
    
`;

const postCommentsDiv = document.createElement('div');
postCommentsDiv.classList.add('postCommentsDiv');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
            comments.map(comment => {
                const {id, postId, name, email, body} = comment;
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('commentDiv');
                commentDiv.innerHTML = `
                    <p>PostID: ${postId} ID: ${id}</p>
                    <h3>${name[0].toUpperCase() + name.slice(1)}</h3>
                    <p>${email}</p>
                    <p>${body[0].toUpperCase() + body.slice(1)}.</p>
                    `;
                postCommentsDiv.appendChild(commentDiv);
            });
    });

const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'light';

let click = true;

button.addEventListener('click', () => {
    postDetailsMain.classList.toggle('light-theme');

    if (!click) {
        button.innerText = 'light';
    }
    else {
        button.innerText = 'dark';
    }
    click = !click;
});

const back = document.createElement('button');
back.classList.add('back');
back.innerText = 'back';

back.onclick = previous = () => {
    window.history.back();
}

postDetailsMain.append(postDiv, postCommentsDiv, back, button);
