const container = document.getElementsByClassName('container')[0];

let fav = 'favorites';
    localStorage.setItem(fav, JSON.stringify([]));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.map(user => {
            const userDiv = document.createElement('div');
            userDiv.innerText = `${user.id} -- ${user.name}`;

            const button = document.createElement('button');
            button.innerText = 'Add to favorite';

            container.append(userDiv, button);

            button.onclick = () => {
                const favorites = JSON.parse(localStorage.getItem(fav));
                favorites.push(user);

                localStorage.setItem(fav, JSON.stringify(favorites));

                button.disabled = true;
            };

        })
    })
