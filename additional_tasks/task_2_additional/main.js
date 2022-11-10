// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
// 3 і більше елементи. Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х
// елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log("It's a big array with 3 or more elements!");
// } else {
//     console.log("It's a small array with less than 3 elements!")
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині. Знайти, яке з них є середнім (більше одного, але
// менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// let a = 6;
// let b = 9;
// let c = 7;
//
// if (a > b && a < c || a > c && a < b) {
//     console.log(a);
// } else  if (b > a && b < c || b > c && b < a) {
//     console.log(b);
// } else if (c > b && c < a || c > a && c < b) {
//     console.log(c);
// } else {
//     console.error('wrong');
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
//
// let b = 1;
// let a = 'jhg';
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//
//     result = 'Багато';
// }
// console.log(result);
//
// a + b < 4 ? console.log(result = 'Мало') : a + b >= 4 ? console.log(result = 'Багато') : console.error('error');

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
// let a = -100;
//
// a > 0 && a <= 100 ? console.log(`${a} is positive`) : a === 0 ? console.log(`${a} is zero`) : a < 0 && a >= -100 ? console.log(`${a} is negative`)
//     : console.log('error');

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = true;
// let test = 'false';
//
// if (test) {
//     console.log('YES');
// }else {
//     console.log('NO');
// }
//
// test === true ? console.log('YES') : test === false ? console.log('NO') : console.log('error');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let variable = prompt('What is the "official" name of JavaScript?');
//
// if (variable === 'ECMAScript') {
//     console.log('You are wright!');
// } else {
//     console.log("You dont knew? It's: ECMAScript!");
// }
//
// variable === 'ECMAScript' ? console.log('You are wright!') : console.log("You dont knew? It's: ECMAScript!");

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить номер
// квартири просто в змінні або через prompt(''). Програма повинна зазначити, в якому під'їзді знаходиться дана
// квартира.
// let apartmentNumber = +prompt('Enter your apartment number.');
//
// if (apartmentNumber >= 1 && apartmentNumber <= 20) {
//     console.log('The first entrance');
// } else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
//     console.log('The second entrance');
// }else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
//     console.log('The third entrance');
// } else {
//     console.error('error');
// }
//
// apartmentNumber >= 1 && apartmentNumber <= 20 ? console.log('The first entrance') :
//     apartmentNumber >= 21 && apartmentNumber <= 48 ? console.log('The second entrance') :
//         apartmentNumber >= 49 && apartmentNumber <= 90 ? console.log('The third entrance') :
//             console.error('error');

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('Number');
//
// if (number === 10) {
//     console.log('Write');
// } else {
//     console.log('Wrong');
// }
//
// number === 10 ? console.log('Write') : console.error('Wrong');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let t = +prompt('Temperature');
//
// if (t > 9 && t < 23) {
//     console.log('Ми йдемо ВЧИТИСЯ');
// } else {
//     console.log('Сидимо вдома і вчимося ОНЛАЙН');
// }
//
// t >= 10 && t <= 22 ? console.log('Ми йдемо ВЧИТИСЯ') : console.error('Сидимо вдома і вчимося ОНЛАЙН');

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що
// число не вірне ... .
//
// let number = +prompt('Enter your number, please!');
//
// switch (number) {
//     case 1:
//         console.log('Your prise is a car');
//         break;
//     case 2:
//         console.log('Your prise is a moto');
//         break;
//     case 3:
//         console.log('Your prise is a phone');
//         break;
//     case 4:
//         console.log('Your prise is a laptop');
//         break;
//     case 5:
//         console.log('Your prise is a tablet');
//         break;
//     default:
//         console.error('Something went wrong!');
// }
