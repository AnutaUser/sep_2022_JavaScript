// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// function cutString(str, n) {
//     const res = [];
//     for (let i = 0; i < str.length; i+=n) {
//             res.push(str.substr(i, n));
//             // res.push(str.substring(i, n));
//     }
//     return res;
// }
//
// let res = cutString('наслаждение', 3);
// console.log(res);

// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let string = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
//
// const delete_characters = (str, length) => str.slice(0, length);
//
// console.log(delete_characters(string, 9));
// document.write(delete_characters(string, 7));

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// const insert_dash = (string) => {
//    return string.replaceAll(' ', '-')
//         .toUpperCase();
// }
// console.log(insert_dash(str));
// document.writeln(insert_dash(str));

// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let str = 'хіба ревуть воли, як ясла повні.';
//
// const first_toUppercase = (string) => string[0] ? string[0].toUpperCase() + string.slice(1) : string;
//
// console.log(first_toUppercase(str));

// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
// const normalizeName = (name) => {
//     return name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
//         .trim();
// }
//
// console.log(normalizeName(n1));
// console.log(normalizeName(n2));
// console.log(normalizeName(n3));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let arr = [];
//
// const randomArray = (a, b) => {
//     for (let i = a; i < b; i++) {
//         arr[i] = Math.round(Math.random() * b);
//     }
//     return arr;
// }
// console.log(randomArray(0, 100));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// // його за допомоги sort
//
// let arr = [];
//
// const randomArray = (a, b) => {
//     for (let i = a; i <b ; i++) {
//         arr[i] = Math.round(Math.random() * b);
//     }
//     // arr.sort((a1, b1) => a1 - b1);
//     arr.sort((a1, b1) => b1 - a1);
//     return arr;
// }
// console.log(randomArray(0, 100));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// // його за допомоги filter, залишивши тільки парні числа (без 0!)
// let arr = [];
//
// const randomArray = (a, b) => {
//     for (let i = a; i < b; i++) {
//         arr[i] = Math.round(Math.random() * b);
//     }
//     return arr
//         .filter(i => i % 2 === 0 && i !== 0)
//         .sort((a1, b1) => a1 - b1);
// }
// console.log(randomArray(0, 100));

// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let string = 'хіба ревуть воли, як ясла повні.';
//
// const capitalize = (str) => {
//     const array = str.split(' ');
//     const newArray = array.map(arr => arr[0].toUpperCase() + arr.slice(1));
//     return newArray
//         .toString()
//         .replaceAll(',', ' ');
// }
//
// console.log(capitalize(string));

// // - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// // равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не
// // чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// // Протестувати на значеннях
// // someemail@gmail.com
// // someeMAIL@gmail.com
// // someeMAIL@i.ua
// // some.email@gmail.com
// //
// // Примітка
// // Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// let email1 = 'someemail@gmail.com';
// let email2 = 'someeMAIL@gmail.com';
// let email3 = 'someeMAIL@i.ua';
// let email4 = 'some.email@gmail.com';
//
// const isEmailValid = (email) => {
//     if (
//         email.includes('@', ('gmail.com' || 'i.ua'))
//         && email.length > 14
//         && !email.includes('.ru')
//         && email.indexOf('.') > 7
//     ) {
//         return email.toLowerCase();
//     } else {
//         console.error(`Email: ${email} is not valid`);
//     }
// }
// console.log(isEmailValid(email1));
// console.log(isEmailValid(email2));
// console.log(isEmailValid(email3));
// console.log(isEmailValid(email4));

// // - є масив
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: [
//             'html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js'
//         ]
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'sass'
//         ]
//     }
// ];
//
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(coursesArray);

// // - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
// let sym = 'о';
// const str = 'Астрономия это наука о небесных объектах';
// // document.writeln(count(str, sym)) // 5
//
// // const count = (string, stringSearch) => {
// //     let array = string.split('');
// //     let count = 0;
// //
// //     for (const arr of array) {
// //         if (arr === stringSearch) {
// //             count += 1;
// //         }
// //     }
// //     return count;
// // }
//
// // const count = (string, stringSearch) => {
// //     let counter = 0;
// //     for (const str of string) {
// //         str === stringSearch ? counter++ : console.error('Something went wrong');
// //     }
// //     return counter;
// // }
// //
// // console.log(count(str, sym));

// // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// const cutString = (string, n) => {
//     const array = string.split(' ');
//     const newArray = array.slice(0, n);
//     return newArray.toString(). replaceAll(',', ' ');
// }
//
// console.log(cutString(str, 6));
// document.writeln(cutString(str, 4));
