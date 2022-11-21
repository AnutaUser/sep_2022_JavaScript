// 1. Створити пустий масив та :
//  a. заповнити його 50 парними числами за допомоги циклу.
//  b. заповнити його 50 непарними числами за допомоги циклу.
//
// let array1 = [];
// let array2 = [];
// for (let i = 0; i <50; i++) {
//     i % 2 === 0 ? array1[i] = i : array2[i] = i;
// }
// console.log(array1);
// console.log(array2);

//  a. заповнити його 50 парними числами за допомоги циклу.
//
// let arr = [];
//
// for (let i = 0, j =0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr[j] = i;
//         j++;
//     }
// }
// console.log(arr);

//  b. заповнити його 50 непарними числами за допомоги циклу.
//
// let arr2 = [];
// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2) {
//         arr2[j] = i;
//         j++;
//     }
// }
// console.log(arr2);

//  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.round(100 * Math.random());
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// let array = [];
//
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round(Math.random() * (732 - 8) + 8);
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < array2.length; i++) {
//     if (!(i % 3)) {
//         console.log(array2[i]);
//     }
// }
//
// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < array1.length; i++) {
//     if (!(i % 3) && array1[i] % 2 === 0) {
//         console.log(`${i} - ${array1[i]}`);
//     }
// }
//
// for (let i = 0; i < array.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
// let array = [493, 123, 599, 36, 87, 579, 85, 501, 59, 408, 450, 446, 327, 644, 174, 219, 631, 314, 331, 299];
// let newArray = [];
// for (let i = 0, j = 0; i < array.length; i+=3) {
//
//     if (array[i] % 2 === 0) {
//         newArray[j] = array[i];
//         j++;
//     }
// }
// console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let array = [493, 123, 599, 36, 87, 579, 85, 501, 59, 408, 450, 446, 327, 644, 174, 219, 631, 314, 331, 299];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
//
// console.log(Math.round(sum / arr.length));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let array = [];
// let newArray = [];
//
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.round(Math.random() * 5);
//     newArray[i] = array[i];
// }
//
// console.log(array);
// console.log(newArray);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.
//
// let array = [25, true, 'str', 50, 'okay', false, -80];
// let newArray = [];
//
// for (let i = 0, j = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         newArray[j] = array[i];
//         j++;
//     }
// }
// console.log(newArray);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);

//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
// let str = '';
//
// for (let i = 0; i < array.length; i++) {
//    str += array[i];
// }
//
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
// let str = '';
//
// let i = 0;
// while (i < array.length) {
//     str += array[i];
//     i++;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
// let str = '';
//
// for (const element of array) {
//     str += element;
// }
// console.log(str);
