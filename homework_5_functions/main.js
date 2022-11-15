// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function SRectangle(a, b) {
//     return a * b;
// }
// console.log(SRectangle(5, 10));
//
// const sRec = (a, b) => a * b;
// console.log(sRec(8, 15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function SCircle(r, PI) {
//     S = PI * r ** 2;
//     return S;
// }
//
// console.log(SCircle(10, 3.14));
//
// const SCirc = (r, PI) => PI * Math.pow(r, 2);
// console.log(SCirc(5, 3.14));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function SCylinder(h, r, PI) {
//     return 2 * PI * r ** 2 + 2 * PI * r * h;
// }
// console.log(SCylinder(10, 5, 3.14));
//
// const SCyl = (h, r, PI) => 2 * PI * r ** 2 + 2 * PI * r * h;
// console.log(SCylinder(8, 4, 3.14));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let users = [
//     {name: 'Vasya', age: 31, status: false},
//     {name: 'Petya', age: 30, status: true},
//     {name: 'Kolya', age: 29, status: true},
//     {name: 'Olia', age: 28, status: false},
//     {name: 'Max', age: 30, status: true},
//     {name: 'Anya', age: 31, status: false},
//     {name: 'Oleg', age: 28, status: false},
//     {name: 'Andrey', age: 29, status: true},
//     {name: 'Masha', age: 30, status: true},
//     {name: 'Olia', age: 31, status: false},
//     {name: 'Max', age: 31, status: true}
// ];
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// function printArray(array) {
//     for (const arr of array) {
//         document.write(`
//             <h2>Name: ${arr.name}</h2>
//             <p>Age: ${arr.age}</p>
//             <p>Status: ${arr.status}</p>
//         `);
//     }
// }
//
// printArray(users);
//
// const printArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`
//             <h2>${array[i].name} ${array[i].surname}</h2>
//             <p>Age: ${array[i].age}</p>
//             <p>${array[i].info}</p>
//             <img src="${array[i].photo}">
//         `);
//     }
// }
//
// printArray(simpsons);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function createParagraph() {
//     for (const arg in arguments) {
//         document.write(`<p>${arguments[arg]}</p>`)
//     }
// }
//
// createParagraph('some text', 'else text', 'text');
//
// const createPar = (text) => {
//     for (const textKey in text) {
//         document.write(`
//             <p>${text[textKey]}</p>
//         `);
//     }
// };
// createPar( {text1: 'TEXT 1', text2:'TEXT 2', text3:'TEXT 3'});

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function createUl(tag, text) {
//     document.write(`<ul>`);
//             document.write(`
//                 <${tag}>${text}</${tag}>
//                 <${tag}>${text}</${tag}>
//                 <${tag}>${text}</${tag}>
//             `);
//     document.write(`</ul>`);
// }
//
// createUl('li',  'SOME TEXT');
//
// const createTag = (tag, text, count) => {
//     document.write(`<ul>`);
//             document.write(`
//                 <${tag}>${text}</${tag}>
//                 <${tag}>${text}</${tag}>
//                 <${tag}>${text}</${tag}>
//             `);
//     document.write(`</ul>`);
// }
// createTag('li', 'some text', 5);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function createUl(tag, count, text) {
//     document.write(`<ul>`);
//         for (let i = 0; i < count; i++) {
//             document.write(`<${tag}>${text}</${tag}>`);
//         }
//     document.write(`</ul>`);
// }
//
// createUl('li', 3, 'SOME TEXT');
//
// const createTag = (tag, text, count) => {
//     document.write(`<ul>`);
//         for (let i = 0; i < count; i++) {
//             document.write(`<${tag}>${text}</${tag}>`);
//         }
//     document.write(`</ul>`);
// }
// createTag('li', 'some text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function createList(tag, [...array]) {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<${tag}>${array[i]}</${tag}>`);
//     }
//     document.write(`</ul>`);
// }
//
// createList('li', [25, 'dfg', true, false, [1, 2, 3], {key: 'id'}]);
//
// const createLi = (tag, [...array]) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<${tag}>${array[i]}</${tag}>`);
//     }
//     document.write(`</ul>`);
// }
//
// createLi('li', [2, 5, 'asd', 'qwe', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// function printArray([...array]) {
//     document.write(`<div class="wrap">`);
//         for (let i = 0; i < array.length; i++) {
//             document.write(`
//                 <div class="array-block">
//                     <h2>${array[i].name} ${array[i].surname}</h2>
//                     <p>Age: ${array[i].age}</p>
//                     <p>Age: ${array[i].info}</p>
//                     <img src="${array[i].photo}" alt="${array[i].name}">
//                 </div>
//             `);
//         }
//     document.write(`</div>`);
// }
//
// printArray(simpsons);

// - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [];
//
// for (let i = 0; i < 20; i++) {
//     numbers[i] = Math.round(Math.random() * 100);
// }
// console.log(numbers);
//
// function minNum([...array]) {
//     let min = Math.min(...array);
//     console.log(min);
// }
//
// minNum(numbers);
//
// const minN = (array) => {
//     let min = array[0];
//     for (const arr of array) {
//         if (arr < min) {
//             min = arr;
//             console.log(min);
//         }
//     }
//     return min;
// }
// console.log(minN(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//
// let numbers = [];
// for (let i = 0; i < 20; i++) {
//     numbers[i] = Math.round(Math.random() * 100);
// }
// console.log(numbers);

// function sumArray ([...array]) {
//     let sum = 0;
//     for (const arr of array) {
//         sum += arr;
//     }
//     return sum;
// }
//
// console.log(sumArray(numbers));
//
// const sumArr = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sumArr(numbers));
