const url = new URL(location.href);
// console.log(url);
const data = url.searchParams.get('data');
const user = JSON.parse(data);

const userDetailsDiv = document.getElementsByClassName('userDetailsMain')[0];

const userBtnDiv = document.createElement('div');
userBtnDiv.classList.add('userBtnDiv');
userDetailsDiv.append(userBtnDiv);

const getUserDetails = (object) => {

    for (const key in object) {
        if (typeof object[key] !== 'object') {
            const keyDiv = document.createElement('div');
            keyDiv.classList.add('keyDiv');
            keyDiv.innerText = key[0].toUpperCase() + key.slice(1) + ': ' + object[key];
            userBtnDiv.appendChild(keyDiv);
        }
        if (typeof object[key] === 'object') {
            getUserDetails(object[key]);
        }
    }
}
getUserDetails(user);

const button = document.createElement('button');
button.classList.add('button');
button.innerText = `Posts of ${user.name}`;

const postsDiv = document.createElement('div');
postsDiv.classList.add('postsDiv');

const postBtnDiv = document.createElement('div');
postBtnDiv.classList.add('postBtnDiv');

userBtnDiv.appendChild(button);
userDetailsDiv.append(postsDiv);

let flag = true;

button.onclick = () => {
    // if (flag) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            posts.filter(post => post.userId === user.id)
                .map(post => {
                    const postBtnDiv = document.createElement('div');
                    postBtnDiv.classList.add('postBtnDiv');
                    postsDiv.appendChild(postBtnDiv);

                    const postDiv = document.createElement('div');
                    postDiv.classList.add('postDiv');
                    postDiv.innerText = post.title[0].toUpperCase() + post.title.slice(1);

                    const postBtn = document.createElement('button');
                    postBtn.classList.add('postBtn');
                    postBtn.innerText = 'Post details';

                    const postA = document.createElement('a');
                    postA.href = '../postDetailsPage/postDetails.html?dataPost=' + JSON.stringify(post);

                    postA.appendChild(postBtn);
                    postBtnDiv.append(postDiv, postA);
                });
        });
    button.disabled = true;
};

    // if (!flag) {
    //     // postsDiv.classList.toggle('hidden');
    //     postsDiv.style.display = 'none';
    // }
    // flag = !flag;
// };


const back = document.createElement('button');
back.classList.add('back');
back.innerText = 'back';

const forward = document.createElement('button');
forward.classList.add('forward');
forward.innerText = 'forward';

forward.onclick = next = () => {
    window.history.forward();
}

back.onclick = function previous() {
    window.history.back();
}

userDetailsDiv.append(back, forward);
