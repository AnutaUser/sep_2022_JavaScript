// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
//
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// // 2. перебрати його циклом for
//
// for (const number of array) {
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i % 2) {
//         console.log(`${i} - ${array[i]}`);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = 0; i < array.length; i++) {
//     if (i % 2) {
//         console.log(`${i}. ${array[i]}`);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(`${i}. ${array[i]}`);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(`${i} - ${array[i]}`);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
//
// let newArray = [];
// for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//     newArray[j] = array[i];
// }
// console.log(newArray);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }
// console.log(array);
//
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }
//
// let newArray = [];
// for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
//     newArray[j] = array[i];
// }
// console.log(newArray);

// 10 створити пустий масив та :
//
// let arr = [];

// - заповнити його 50 парними числами за допомоги циклу.
//
// for (let i = 0; i < 50; i++) {
//     arr[i] = 2 * i;
// }
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.
//
// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2) {
//         arr[j] = i;
//         j++
//     }
// }
// console.log(arr);

// 1. Створити пустий масив та :
// let array = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
//
// for (let i = 0; i < 50; i++) {
//     array[i] = 2 * i;
// }
// console.log(array);

//     b. заповнити його 50 непарними числами за допомоги циклу.
//
// for (let i = 0; i < 50; i++) {
//     array[i] = (2 * i) + 1;
// }
// console.log(array);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round(Math.random() * 100);
// }
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round(Math.random() * (732 - 8) + 8);
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let array = [100, 250, 50, 168, 120, 345, 188];
// // let array = [100, 150, 50];
// let sum = 0;
//
// for (const num of array) {
//     sum += num;
// }
//
// let result = sum / array.length;
// console.log(result);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr1 = [];
// let arr2 = [];
//
// for (let i = 0; i < 20; i++) {
//     arr1[i] = Math.round(Math.random() * 10);
//     arr2[i] = arr1[i] * 5;
// }
// console.log(arr1);
// console.log(arr2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array1 = [100, 'str', 50, true, 'boolean', NaN, false, 'str2'];
// let array2 = [];
//
// for (let i = 0, j =0; i < array1.length; i++) {
//     if (typeof array1[i] === "boolean") {
//         array2[j] = array1[i];
//         j++;
//     }
// }
// console.log(array1);
// console.log(array2);

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (const city of citiesWithId) {
//         if (usersWithId[i].id === city.user_id) {
//             usersWithId[i].address = city;
//             usersWithCities[i] = usersWithId[i];
//         }
//     }
//
// }
//
// // console.log(usersWithId);
// console.log(usersWithCities);
