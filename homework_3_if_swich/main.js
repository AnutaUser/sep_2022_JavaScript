// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте
//     скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Enter number');
//
// if (x !== 0) {
//     console.log('Вірно!');
// } else {
//     console.log('Невірно');
// }
//
// let x1 = x !== 0 ? 'write' : 'wrong';
// console.log(x1);
//
//
// switch (x) {
//     case 1:
//         console.log('Вірно!');
//         break;
//     case -3:
//         console.log('Вірно!');
//         break;
//     case 0:
//         console.log('Невірно');
//         break;
//     default:
//         console.log('What the f*ck?');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до
// якої четверті години попадає число (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('Enter time');
//
// if (time >= 0 && time < 16) {
//     console.log('First quarter');
// } else if (time > 15 && time < 31) {
//     console.log('Second quarter');
// } else if (time > 30 && time < 46) {
//     console.log('Third quarter');
// } else if (time > 45 && time < 60) {
//     console.log('Fourth quarter');
// } else {
//     console.log('What?????')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Day number:');
//
// if (day >= 1 && day < 11) {
//     console.log('First decade.')
// } else if (day > 10 && day < 21) {
//     console.log('Second decade.')
// } else if (day >20 && day < 32) {
//     console.log('Third decade.');
// } else {
//     console.log('????????????????????');
// }

// day >= 1 && day <= 10 ? console.log('first') : day > 10 && day <= 20 ? console.log('second') :
//     day > 20 && day <= 31 ? console.log('third') : console.log('error');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня
// тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день,
// назву дня англійською).
//
// let schedule = +prompt('Enter day, please)');
//
// switch (schedule) {
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         console.log('Not exist');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
//
// if (a > b) {
//     console.log(a);
// } else if (a < b) {
//     console.log(b);
// } else if (a === b) {
//     console.log(`${a} = ${b}`);
// } else {
//     console.log('mistake');
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код
// який, за допомоги  оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється
// falsy (хибноподыбне, тобто кастується до false)
//
// // let x = 0 || '' || NaN || false || undefined || null;
// let x = NaN;
//
// if (!x) {
//     let x = 'default';
//     console.log(x);
// } else {
//     console.log(x)
// }

