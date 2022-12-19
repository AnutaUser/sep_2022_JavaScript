let mainDiv = document.getElementsByClassName('usersMain')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.map(user => {
            const {id, name} = user;

            const userDiv = document.createElement('h2');
            userDiv.innerText = `${user.id}. ${name}`;

            const button = document.createElement('button');
            button.innerText = 'user details';

            const a = document.createElement('a');
            a.href = '../userDetailsPage/userDetails.html?data=' + JSON.stringify(user);

            a.appendChild(button);
            mainDiv.append(userDiv, a);
        });
    });
