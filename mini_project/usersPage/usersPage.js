let mainDiv = document.getElementsByClassName('usersMain')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.map(user => {
            const {id, name} = user;

            const userBtnDiv = document.createElement('div');
            userBtnDiv.classList.add('userBtnDiv');
            mainDiv.appendChild(userBtnDiv);

            const userDiv = document.createElement('h2');
            userDiv.classList.add('userDiv');
            userDiv.innerText = `${user.id}. ${name}`;

            const button = document.createElement('button');
            button.classList.add('userDetailsBtn');
            button.innerText = `-- ${name} details ---`;

            const a = document.createElement('a');
            a.href = '../userDetailsPage/userDetails.html?data=' + JSON.stringify(user);

            a.appendChild(button);
            userBtnDiv.append(userDiv, a);
        });
    });
