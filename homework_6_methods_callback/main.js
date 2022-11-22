// - Знайти та вивести довижину настипних стрінгових значень
//
const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';

// console.log(`length1: ${str1.length}`);
// console.log(`length2: ${str2.length}`);
// console.log(`length3: ${str3.length}`);
console.log(`length1: ${str1.length}, length2: ${str2.length}, length3: ${str3.length}`);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення

// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());
console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
//
// console.log(str.length);
// // let newStr = str.trim();
// // console.log(newStr.length);
//
// let newStr = str.replaceAll(' ', '');
// console.log(newStr);

// // - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// // let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// const arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map та колбеку перетворити всі об'єкти в масиві на
// стрінгові.
//
// const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// const newArr = array.map(value => value.toString());
// console.log(newArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// const sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         array.sort((a, b) => b - a);
//     } else {
//         console.log('error');
//     }
//     console.log(array);
// }
//
// sortNums(nums, 'ascending');
// sortNums(nums, 'descending');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// const sort = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);
//
// const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// const colors = ['red', 'black'];
// const cardSuits = ['heart', 'diamond', 'club', 'spade'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace', 'joker'];
// const cards = [];
//
// for (const value of values) {
//     for (const cardSuit of cardSuits) {
//         if ((cardSuit === 'heart' || cardSuit === 'diamond') && value !== 'joker') {
//             cards.push({value: value, cardSuit: cardSuit, color: colors[0]});
//         } else if ((cardSuit === 'club' || cardSuit === 'spade') && value !== 'joker') {
//             cards.push({value: value, cardSuit: cardSuit, color: colors[1]});
//         }
//     }
// }
// cards.push({value: 'joker', color: 'red'});
// cards.push({value: 'joker', color: 'black'});
//
// console.log(cards);

// - знайти піковий туз
//
// const spadeAce = cards.filter(card => card.value === 'ace' && card.cardSuit === 'spade');
// console.log(spadeAce);

// - всі шістки
//
// const sixAll = cards.filter(card => card.value === '6');
// console.log(sixAll);

// - всі червоні карти
//
// const redCards = cards.filter(card => card.color === 'red');
// console.log(redCards);

// - всі буби
//
// const diamondsAll = cards.filter(card => card.cardSuit === 'diamond');
// console.log(diamondsAll);

// - всі трефи від 9 та більше
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// const newObj = cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push({cardSuit: card.cardSuit, color: card.color, values: card.value});
//     }
//     if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push({cardSuit: card.cardSuit, color: card.color, values: card.value});
//     }
//     if (card.cardSuit === 'spade') {
//         accumulator.hearts.push({cardSuit: card.cardSuit, color: card.color, values: card.value});
//     }
//     if (card.cardSuit === 'club') {
//         accumulator.clubs.push({cardSuit: card.cardSuit, color: card.color, values: card.value});
//     }
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: [],})
//
// console.log(newObj);