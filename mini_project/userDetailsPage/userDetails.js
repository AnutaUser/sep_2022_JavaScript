const url = new URL(location.href);
console.log(url);
const data = url.searchParams.get('data');
const user = JSON.parse(data);
// console.log(user)

const userDetailsDiv = document.getElementsByClassName('userDetailsMain')[0];

const getUserDetails = (object) => {

    for (const key in object) {
        if (typeof object[key] !== 'object') {
            const keyDiv = document.createElement('div');
            keyDiv.innerText = key[0].toUpperCase() + key.slice(1) + ': ' + object[key];
            userDetailsDiv.appendChild(keyDiv);
        }
        if (typeof object[key] === 'object') {
            getUserDetails(object[key]);
        }
    }
}
getUserDetails(user);

const button = document.createElement('button');
button.innerText = 'posts of current user';

const postsDiv = document.createElement('div');
postsDiv.classList.add('postsDiv');

userDetailsDiv.append(button, postsDiv);


button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            posts.map(post => {
                if (post.userId === user.id) {
                    const postDiv = document.createElement('div');
                    postDiv.innerText = post.title[0].toUpperCase() + post.title.slice(1);

                    const postBtn = document.createElement('button');
                    postBtn.innerText = 'Post details';

                    const postA = document.createElement('a');
                    postA.href = '../postDetailsPage/postDetails.html?dataPost=' + JSON.stringify(post);

                    postA.appendChild(postBtn);
                    postsDiv.append(postDiv, postA);

                }
            });
        })
};
