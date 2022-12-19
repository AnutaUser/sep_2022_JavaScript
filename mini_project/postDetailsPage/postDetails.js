const url = new URL(location.href);
const data = url.searchParams.get('dataPost');
const post = JSON.parse(data);
console.log(post);

const postDetailsMain = document.getElementsByClassName('postDetailsMain')[0];

const postDiv = document.createElement('div');
postDiv.classList.add('postDiv');
postDiv.innerHTML = `
    <p>ID: ${post.id}  UserID: ${post.userId}</p>
    <h2>
        ${post.title[0].toUpperCase() + post.title.slice(1)}
    </h2>
    <p>${post.body[0].toUpperCase() + post.body.slice(1)}.</p>
    
`;

const postCommentsDiv = document.createElement('div');
postCommentsDiv.classList.add('commentsDiv');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        for (let i = 0; i < comments.length; i++) {
            const {id, postId, name, email, body} = comments[i];
            if (post.id === postId){
                const commentsDiv = document.createElement('div');
                commentsDiv.innerHTML = `
                <p>PostID: ${postId} ID: ${id}</p>
                <h3>${name}</h3>
                <p>${email}</p>
                <p>${body}</p>
                `;
                postCommentsDiv.appendChild(commentsDiv);
            }
        }
    })

postDetailsMain.append(postDiv, postCommentsDiv);
