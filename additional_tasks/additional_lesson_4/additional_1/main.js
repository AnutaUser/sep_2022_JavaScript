// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr1 = [25, 16, -48, 59, 954,];
// let arr2 = ['react', 'ts', 'css', 'html', 'js',];
// let arr3 = ['Olia', true, 59, 'Kira', 26,];
//
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array = [];
// array[0] = 'first';
// array[1] = 952;
// array[2] = false;
// array[3] = {name: 'first', age: 25};
// array[4] = [1, 2, 3, 4, 5,];
//
// console.log(array);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
//
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// 2. перебрати його циклом for
//
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
//
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let i = 0;
// while (i < array.length) {
//     if (i % 2 === 0) {
//         console.log(`${i} - ${array[i]}`);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let j = 0; j < array.length; j++) {
//     if (j % 2===1) {
//         console.log(`${j}. ${array[j]}`);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let i = 0;
// while (i < array.length) {
//     if (!(array[i] % 2)) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let j = 0; j < array.length; j++) {
//     if (array[j] % 2) {
//         console.log(array[j]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 3)) {
//         array[i] = 'okten' ;
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
//
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }

// for (let j = array.length - 1; j >= 0; j--) {
//     console.log(array[j]);
// }

// let i = array.length - 1;
// while (i >=0) {
//     if (i % 2) {
//         console.log(`${i}. ${array[i]}`);
//     }
//     i--;
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2) {
//         console.log(`${i}. ${array[i]}`);
//     }
// }

// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     if (!(array[i] % 2)) {
//         console.log(array[i]);
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// // console.log(array);
// for (let j = array.length - 1; j >= 0; j--) {
//     console.log(array[j]);
// }

// let i = 0;
// while (i < array.length ) {
//     if (!(array[i] % 3)) {
//         array[i] = 'okten';
//     }
//     i++;
// }
//
// let j = array.length - 1;
// while (j >= 0) {
//     console.log(array[j]);
//     j--;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [25, 49, 2.15, 94, 6.4, -50.2, 666, -99, 100, -1.1];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = ['html', 'css', 'js', 'ts', 'angular', 'react', 'node', 'nest', 'java', 'python', ];
// let i = 0;
// while (i < array.length) {
//     console.log(`${i} - ${array[i]}`);
//     i++;
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array = [true, 'css', 25, 'ts', 'angular', null, 'node', 'nest', -99, false, ];
// let i = 0;
// while (i < array.length) {
//     console.log(`${i} - ${array[i]}`);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let array = [true, 'css', 25, 'ts', 'angular', null, 'node', 'nest', -99, false, ];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let array = [true, 'css', 25, 'ts', 'angular', null, 'node', 'nest', -99, false, ];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let array = [true, 'css', 25, 'ts', 'angular', null, 'node', 'nest', -99, false, ];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let array = [];
//
// array[0] = 'js';
// array[1] = 25;
// array[2] = true;
// array[3] = 666;
// array[4] = 'ts';
// array[5] = 'react';
// array[6] = -52;
// array[7] = NaN;
// array[8] = 'boolean';
// array[9] = '70';
//
// console.log(array);
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log([i]);
//     document.write([i]);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log([i]);
//     document.write([i]);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// let step = 0;
// for (let i = 0; i < 100; i ++ ) {
//     console.log(`${i}. step: ${step}`);
//     document.write(` -- ${i}. step: ${step}`);
//     step += 2;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log([i]);
//         document.write(`${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(`step: ${i}`);
//         document.write(`step: ${i} <br>`);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {name: 'Harry Potter', pages: 323, authors: ['Dfghjk', 'guhkj'], genres: ['aaaaaa', 'sssssss', 'ddddddd']},
    {name: 'Little Prince', pages: 95, authors: ['Gdvxcvd'], genres: ['xzxxxx', 'asd']},
    {name: 'Dracula', pages: 120, authors: ['Xcsac'], genres: ['aaaaaa', 'sssssss', 'sv', 'ddddddd']},
    {name: 'The Lost World', pages: 235, authors: ['Acsc', 'Frhftgn', 'Lojikn'], genres: ['sssssss', 'ddddddd']},
    {name: 'Yellow wallpaper', pages: 951, authors: ['Dfghjk', 'guhkj'], genres: ['asdf']},
    {name: 'Three man in a boat', pages: 200, authors: ['Sgghj'], genres: ['ughbnj']},
    {name: 'Frankenstein', pages: 180, authors: ['Ckihjn'], genres: ['aaaaaa', 'sssssss']},
    {name: 'Zorro', pages: 510, authors: ['Plopkmo'], genres: ['aaaaaa', 'sssssss', 'ddddddd', 'jjklnlkn']},
    {name: 'Alice in Wonderland ', pages: 413, authors: ['Ikmo', 'Uhhn'], genres: ['sssssss', 'ddddddd']},
    {name: 'Tom Sawyer', pages: 297, authors: ['Zlm'], genres: ['frvssss']},
];

// -знайти наібльшу книжку.
// let maxPages = books[0];
//
// for (const book of books) {
//     if (book.pages > maxPages.pages) {
//         maxPages = book;
//         console.log(book);
//     }
// }

// - знайти книжку/ки з найбільшою кількістю жанрів
//
// let maxGenres = books[0];
//
// for (const book of books) {
//     if (book.genres.length > maxGenres.genres.length) {
//         maxGenres = [book];
//             console.log(book);
//     }
// }

// - знайти книжку/ки з найдовшою назвою
//
// let maxName = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].name.length > maxName.name.length) {
//         console.log(books[i].name.length);
//         console.log(maxName.name.length);
//         maxName = books[i];
//         console.log(books[i]);
//     }
// }

// - знайти книжку/ки які писали 2 автори
//
// for (const book of books) {
//     if (book.authors.length === 2) {
//         console.log(book);
//     }
// }

// - знайти книжку/ки які писав 1 автор
//
// for (const book of books) {
//     if (book.authors.length === 1) {
//         console.log(book);
//     }
// }
