// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// const printMin = (a, b, c) => {
//     a < b && a <= c ? console.log(`a: ${a}`) :
//         b <= a && b < c ? console.log(`b: ${b}`) :
//             c < a && c <= b ? console.log(`c: ${c}`) :
//                 console.error('something went wrong');
// };
//
// printMin(75, 9, 9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// const printMax = (a, b, c) => {
//     if (a > b && a >= c) {
//         console.log(`a: ${a}`);
//     } else if (b >= a && b > c) {
//         console.log(`b: ${b}`);
//     }else if (c >= a && c >= b) {
//         console.log(`c: ${c}`);
//     } else {
//         console.error('ERROR');
//     }
// };
//
// printMax(9, 9, 7);

// - створити функцію яка повертає найбільше число з масиву
//
// let numbers = [52, 0.69, -59, 156, 62];
//
// const maxNum = array => Math.max(...array);
// const  max = maxNum(numbers);
// console.log(max);

// - створити функцію яка повертає найменьше число з масиву
//
// const minNum = array => Math.min(...array);
// const min = minNum(numbers);
// console.log(min);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає
// його. Приклад [1,2,10]->13
//
// const sumOfArray = array => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     console.log(sum);
//     return sum;
// };
// sumOfArray(numbers);

// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// const printNumbers = n => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// };
//
// printNumbers(8);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке
// возрастания, если A < B, или в порядке убывания в противном случае.
//
// const print = (A, B) => {
//     if (A < B) {
//         for (let i = A; i <= B ; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = A; i >= B; i--) {
//             console.log(i);
//         }
//     }
// }
// print(13, 13);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в
// індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let arrOfNum = [9, 8, 0, 4];
//
// const foo = (array, i) => {
//   for (let j = 0; j < array.length; j++) {
//     let elJ = array[j];
//     let plusOne = array[j+1];
//     if (i === j) {
//       console.log(array[j+1] = elJ);
//       console.log(array[j] = plusOne);
//     }
//   }
//   return array;
// }
//
// const foo = (array, num) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i + 1]) {
//             let element = array[num];
//             array[num] = array[num + 1];
//             array[num + 1] = element;
//         } else {
//             console.log('Error');
//         }
//     }
//     return array;
// }
// console.log(foo(arrOfNum, 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи
// при цьому порядок не нульових значень. Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr1 = [1, 0, 6, 0, 3];
// let arr2 = [0, 1, 2, 3, 4];
// let arr3 = [0, 0, 1, 0];

// const foo = array => {
//     let newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             newArray[index++] = array[i];
//         } else {
//             counter++;
//         }
//     }
//     console.log(counter);
//     let num = newArray.length;
//     for (let i = num; i < num + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }
// console.log(foo(arr1));
// console.log(foo(arr2));
// console.log(foo(arr3));

// const foo = array => {
//     const newArr = [];
//     let counter = 0;
//     for (let i = 0, j = 0; i < array.length; i++) {
//         array[i] ? newArr[j++] = array[i] : counter++;
//     }
//
//     let num = newArr.length;
//     for (let i = num; i < num + counter; i++) {
//         newArr[i] = 0;
//     }
//     return newArr;
// }
// console.log(foo(arr1));
// console.log(foo(arr2));
// console.log(foo(arr3));
