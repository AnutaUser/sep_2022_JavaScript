// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let array = [];
//
// array[0] = 100500;
// array[1] = true;
// array[2] = false;
// array[3] = '100500';
// array[4] = 'number';
// array[5] = {name: 'Ira', age: 22, status: true};
// array[6] = [1, 2, 3, 4, 5,];
// array[7] = ['1', '2', '3'];
// array[8] = [{name: 'Ivan', age: 25}, {name: 'Petro', age: 32}, {name: 'Olha', age: 17}];
// array[9] = {skills: ['HTML', 'CSS', 'JS']};
//
// console.log(`Array length is: ${array.length}.`);
// console.log(array);
//
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book_1 = {title: 'Harry Potter and the Sorcerers Stone', pageCount: 309, genre: 'fantasy novel', author: ' J. K. Rowling'};
// let book_2 = {title: 'Eclipse', pageCount: 629, genre: 'novel', author: 'Stephenie Meyer'};
// let book_3 = {title: 'Sherlock Holmes', pageCount: 752, genre: 'detective', author: 'Arthur Conan Doyle'};
//
// console.log(book_1, book_2, book_3);

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let book_1 = {
//     title: 'Harry Potter and the Sorcerers Stone',
//     pageCount: 309,
//     genre: 'fantasy novel',
//     authors: [
//         {name:'J. K.', age: 55},
//         {name:'Rowling', age: 45},
//     ]
// };
// let book_2 = {
//     title: 'Eclipse',
//     pageCount: 629,
//     genre: 'novel',
//     authors: [
//         {name: 'Stephenie', age: 70},
//         {name: 'Meyer', age: 50},
//     ]
// };
// let book_3 = {
//     title: 'Sherlock Holmes',
//     pageCount: 752, genre: 'detective',
//     authors: [
//         {name: 'Arthur', age: 70},
//         {name: 'Conan Doyle', age: 50},
//     ]
// };
//
// console.log(book_1);
// console.log(book_1.authors);
// console.log(book_1.authors[1]);

// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'Ivan', userName: 'banan', password: 'Ivan-banan'},
//     {name: 'Olha', userName: 'apelsinka', password: 'Olka-fasolka'},
//     {name: 'Anna', userName: 'sweet', password: 'Anna-sweet'},
//     {name: 'Daniel', userName: 'kokos', password: 'Daniel-kokos'},
//     {name: 'Karina', userName: 'kara', password: 'Karina-kara'},
//     {name: 'Ben', userName: 'bigBen', password: 'Ben-bigBen'},
//     {name: 'Oleg', userName: 'olko', password: 'Oleg-olko'},
//     {name: 'Kate', userName: 'bird', password: 'Kate-bird'},
//     {name: 'Lisa', userName: 'Elisa', password: 'Lisa-Elisa'},
//     {name: 'Gabriel', userName: 'garbus', password: 'Gabriel-garbus'},
// ];
//
// // console.log(users);
// // console.log(users[0].password);
// // console.log(users[1].password);
// // console.log(users[2].password);
// // console.log(users[3].password);
// // console.log(users[4].password);
// // console.log(users[5].password);
// // console.log(users[6].password);
// // console.log(users[7].password);
// // console.log(users[8].password);
// // console.log(users[9].password);
// //
// console.log(typeof users);
// console.log(Array.isArray(users));
// console.log(Array.isArray(users));
//
// users.map(user => {
//         console.log(user.password)
//     }
// );
