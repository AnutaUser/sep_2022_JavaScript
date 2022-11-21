// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function min (a, b, c) {
//     if (a <= b && a <= c) {
//         console.log(`a: ${a}`);
//     } else if (b <= a && b <= c) {
//         console.log(`b: ${b}`);
//     } else if (c <= a && c <= b) {
//         console.log(`c: ${c}`);
//     } else {
//       console.log('error');
//     }
// }
//
// min(2, 2, 5);
//
// const min = (a, b, c) => {
//   a <= b && a < c ? console.log(`a: ${a}`) :
//       b < a && b <= c ? console.log(`b: ${b}`) :
//           c <= a && c < b ? console.log(`c: ${c}`) :
//               console.error('error');
// };
//
// min(4, 125, 4);
// noinspection UnreachableCodeJS

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function max (a, b, c) {
//     if (a >= b && a >= c) {
//         console.log(`a: ${a}`);
//     } else if (b >= a && b >= c) {
//         console.log(`b: ${b}`);
//     } else if (c >= a && c >= b) {
//         console.log(`c: ${c}`);
//     } else {
//       console.log('error');
//     }
// }
//
// max(5, 3, 5);
//
// const max = (a, b, c) => {
//   a >= b && a > c ? console.log(`a: ${a}`) :
//       b > a && b >= c ? console.log(`b: ${b}`) :
//           c >= a && c > b ? console.log(`c: ${c}`) :
//               console.error('error');
// };
//
// max(248, 125, 244);

// - створити функцію яка повертає найбільше число з масиву
//
// let numbers = [];
// for (let i = 0; i < 20; i++) {
//     numbers[i] = Math.round(Math.random() * 100);
// }
// console.log(numbers);
//
// function maxOfArray (array) {
//     let max = array[0];
//     for (const arr of array) {
//         if (arr > max) {
//             max = arr;
//         }
//     }
//     console.log(max);
// }
//
// maxOfArray(numbers);
//
// const maxOfArray = (array) => {
//     let max = Math.max(...array);
//     console.log(max);
// }
// maxOfArray(numbers);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let numbers = [];
// for (let i = 0; i < 20; i++) {
//     numbers[i] = Math.round(Math.random() * 100);
// }
// console.log(numbers);
//
// function arithmeticMean (array) {
//     let mean = 0;
//     for (const arr of array) {
//         mean += arr;
//     }
//     let result = mean / array.length;
//     console.log(result);
// }
//
// arithmeticMean(numbers);
//
// const arithmeticMean = (array) => console.log(Math.max(...array));
// arithmeticMean(numbers);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function minMax() {
//     // console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (const arg of arguments) {
//         if (arg < min) min = arg;
//         if (arg > max) max = arg;
//     }
//     console.log(max);
//     return min;
// }
// minMax(65, 351, 2, 6, -5, 96);
//
// const minMax = (arguments) => {
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (const arg of arguments) {
//        if (arg < min) min = arg;
//        if (arg > max) max = arg;
//     }
//
//     console.log(max);
//     console.log(min);
//     return min;
// };
// minMax([5, 6, 89, -45]);

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100
// - Math.round(Math.random()*100)) та виводить його.
//
// let array = [];
//
// function random() {
//     for (let i = 0; i < 25; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
// }
// random();
// console.log(array);
//
// const random = (newArray) => {
//     for (let i = 0; i < 50; i++) {
//         newArray[i] = Math.round(Math.random() * 100);
//     }
// }
// random(array);
// console.log(array);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
//
// let array = [];
//
// function randomLimit(limit) {
//     for (let i = 0; i < limit; i++) {
//         array[i] = Math.floor(Math.random() * limit);
//     }
// }
// randomLimit(20);
// console.log(array);
//
// const randomLimit = (limit) => {
//     for (let i = 0; i < limit; i++) {
//         array[i] = Math.floor(Math.random() * limit);
//     }
// }
// randomLimit(20);
// console.log(array);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [];
//
// function reversArray(arr1, arr2) {
//     for (let i = arr1.length - 1, j = 0; i >= 0, j <= arr1.length - 1; i--, j++) {
//         arr2[j] = arr1[i];
//     }
// }
// reversArray(array1, array2);
// console.log(array1);
// console.log(array2);
//
// const reversArr = (arr1, arr2) => {
//     for (let i = arr1.length - 1, j = 0; i >= 0, j <= arr1.length -1; i--, j++) {
//         console.log(arr1[i]);
//         arr2[j]= arr1[i];
//     }
// }
// reversArr(array1, array2);
// console.log(array1);
// console.log(array2);
//
// const reversArr = array => {
//     const newArr = [];
//     for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//         newArr[j] = array[i];
//     }
//     return newArr;
// }
// console.log(reversArr(array1));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або 
// конкатенує їх між собою.
//
// function printConcat() {
//     if (arguments.length === 1) {
//         console.log(arguments);
//     }else if (arguments.length === 2) {
//         let concat = arguments[0] + arguments[1] ;
//         console.log(concat);
//     } else {
//         console.error('Something went wrong!');
//     }
// }
//
// printConcat(8, '52');
//
// const printConcat = (...arg) => {
//     if (arg.length === 1) {
//         console.log(arg);
//     } else if (arg.length >= 1) {
//         let concat = 0;
//         for (let i = 0; i < arg.length; i++) {
//             concat += arg[i];
//         }
//         console.log(concat);
//     }else {
//         console.log('error(');
//     }
// }
// printConcat(3, 5, '5');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let nums1 = [1, 2, 3, 4];
// let nums2 = [1, 2, 3, 4, 5];
//
// // function createNewArray (array1, array2) {
//
//     for (let i = 0, j = 0, k =0 ; i < array1.length -1, j < array2.length -1, k < array1.length; i++, j++, k++) {
//         newArray[k] = array1[i] + array2[j];
//     }
// }
//
// createNewArray(nums1, nums2);
// console.log(newArray);
//
// const newArr = (arr1, arr2) => {
//
//     let newArray = [];
//     let xxx;
//     if (arr1.length >= arr2.length) {
//         xxx = arr1;
//     } else {
//         xxx = arr2;
//     }
//     console.log(xxx);
//
//     for (let i = 0; i < xxx.length; i++) {
//         newArray[i] = (arr1[i] || 0) + (arr2[i] || 0);
//     }
//     return newArray;
//
// }
// console.log(newArr(nums1, nums2));
//
// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3,4,5];
// function foo(array1,array2) {
//     let res = [];
//     let xxx = array1.length >= array2.length ? array1 : array2;
//     console.log(xxx);
//     for (let i = 0; i < xxx.length; i++) {
//         res[i] = (array1[i] || 0) + (array2[i] || 0);
//     }
//     return res;
// }
//
// console.log(foo(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrayOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let arrayOfKeys = [];

// function throwKeys(array) {
//     for (let i = 0; i < array.length; i++) {
//         let arrOfKeys0 = Object.keys(array[0]);
//         let arrOfKeys1 = Object.keys(array[1]);
//         for (let j = 0, k=0; j < arrOfKeys0.length + 1, k <arrOfKeys1.length; j++, k++) {
//             arrayOfKeys = [arrOfKeys0[0], arrOfKeys0[1], arrOfKeys1[k]];
//         }
//         // console.log(arrOfKeys0, arrOfKeys1);
//     }
//
//     return arrayOfKeys;
// }
// throwKeys(arrayOfObj);
// console.log(arrayOfKeys);

// const onlyKeys = array => {
//     // let newArr = [];
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             arrayOfKeys[j++] = key;
//         }
//     }
//     return arrayOfKeys;
// }
// console.log(onlyKeys(arrayOfObj));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
function throwValue(array) {
    for (let i = 0, j = 0; i < array.length; i++) {
        for (const key in array[i]) {
            arrayOfKeys[j++] = array[i][key];
        }
    }
    return arrayOfKeys;
}

throwValue(arrayOfObj);
console.log(arrayOfKeys);
