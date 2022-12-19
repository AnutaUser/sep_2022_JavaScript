// зробити файл usersPage.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.map(user => {
            const userH2 = document.createElement('h2');
            const userA = document.createElement('a');
            userA.href = 'user-details.html?id=' + user.id;
            userA.style.fontSize = '25px';

            userA.innerHTML = `${user.id } -- ${user.name}`;
            document.body.append(userH2, userA);
        });
    });