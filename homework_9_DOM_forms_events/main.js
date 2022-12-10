// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
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
// for (const simpson of simpsons) {
//     const div = document.createElement('div');
//     div.classList.add('member');
//     div.innerHTML = `
//         <h2>${simpson.name} ${simpson.surname} -- ${simpson.age}</h2>
//         <p>${simpson.info}</p>
//         <img src="${simpson.photo}" alt="${simpson.name}_${simpson.surname}">
//     `
//     document.body.append(div);
// }

// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
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
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const course of coursesArray) {
//     const block = document.createElement('div');
//     block.classList.add('block');
//     block.style.border = '2px solid blue'
//     block.innerHTML = `
//         <h2>${course.title}</h2>
//         <h4>MonthDuration: ${course.monthDuration}, hourDuration: ${course.hourDuration}</h4>
//     `;
//     const ul = document.createElement('ul');
//     for (const module of course.modules) {
//         const li = document.createElement('li');
//         li.innerHTML = module;
//
//         ul.append(li);
//     }
//     block.append(ul);
//     document.body.appendChild(block);
// }

// ------------------

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// const block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.border = '4px solid cornflowerblue';
// block.style.borderRadius = '2vh';
// block.style.background = '#bab9c2';
// block.style.padding = '2%';
// block.style.boxSizing = 'borderBox';
// block.style.textAlign = 'justify';
// block.style.fontSize = '20px';
// block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste laboriosam magni maiores qui ' +
//     'quibusdam, quos reiciendis sapiente vel veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste laboriosam magni maiores qui ' +
//     'quibusdam, quos reiciendis sapiente vel veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste laboriosam magni maiores qui ' +
//     'quibusdam, quos reiciendis sapiente vel veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste laboriosam magni maiores qui ' +
//     'quibusdam, quos reiciendis sapiente vel veniam?';
//
// const cloneBlock = block.cloneNode(true);
// // cloneBlock.innerText = 'consectetur adipisicing elit. Harum iste laboriosam magni maiores qui quibusdam reiciendis';
//
// document.body.append(block, cloneBlock);

// - Є масив:
// const array = ['Main', 'Products', 'About us', 'Contacts'];
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
//
// const ul = document.getElementsByClassName('menu')[0];
// for (const arr of array) {
//     const li = document.createElement('li');
//     li.innerText = arr;
//     ul.appendChild(li);
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.style.border = '4px solid darkblue';
//     div.style.borderRadius = '2vh';
//     div.style.marginBottom = '2vh';
//     div.style.padding = '1vh';
//     div.style.width = '25vw';
//     div.style.textAlign = 'center';
//     div.style.color = '#c008d4';
//     div.style.background = '#08d4cd';
//     div.innerHTML = `
//     <h1>${element.title}</h1>
//     <p>MonthDuration: ${element.monthDuration}</p>
//     `
//     document.body.append(div);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     const divElement = document.createElement('div');
//     divElement.classList.add('item');
//     divElement.style.width = '30vw';
//     divElement.style.border = '4px solid #702679';
//     divElement.style.borderRadius = '1vh';
//     divElement.style.background = '#c008d4';
//     divElement.style.marginBottom = '2vh';
//     divElement.style.textAlign = 'center';
//
//     const h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//     h1Element.innerText = course.title;
//
//     const pElement = document.createElement('p');
//     pElement.classList.add('description');
//     pElement.innerText = `Duration: ${course.monthDuration}`;
//
//     divElement.append(h1Element, pElement);
//     document.body.appendChild(divElement);
// }

// -----------

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".
//
// const divElement = document.createElement('div');
// divElement.setAttribute('id', 'text');
//
// divElement.innerHTML = `
//     <p>
//         Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text;
//     </p>
//     <img src="https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png" alt="Bart_simpson">
//     `;
//
// const button = document.createElement('button');
// button.innerText = 'Click me';
// button.onclick = () => {
//     const text = document.getElementById('text');
//     text.style.display = 'none';
// }
//
// document.body.append(divElement, button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const form = document.createElement('form');
// const input = document.createElement('input');
// input.setAttribute('type', 'number');
//
// const button = document.createElement('button');
// button.innerText = 'Send';
// button.onclick = () => {
//     if (input.value < 19) {
//         alert('Access denied!');
//     } else {
//         alert('Access is allowed');
//     }
// };
//
// form.append(input, button);
// document.body.appendChild(form);

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// const form = document.createElement('form')
// document.body.append(form);
//
// const input1 = document.createElement('input');
// input1.setAttribute('type', 'number');
//
// const input2 = document.createElement('input');
// input2.setAttribute('type', 'number');
//
// const input3 = document.createElement('input');
//
// const button = document.createElement('button');
// button.innerText = 'create table';
//
// form.append(input1, input2, input3, button);
// document.body.append(input1, input2, input3, button);
//
// button.onclick = () => {
//
//     const width = +input1.value;
//     const height = +input2.value;
//     const text = input3.value;
//
//     const createTable = (raws, column, word) => {
//
//         const table = document.createElement('table');
//         table.style.border = `2px solid black`;
//         document.body.append(table);
//
//         for (let i = 0; i < raws; i++) {
//             let tr = document.createElement('tr');
//             table.append(tr);
//
//             for (let j = 0; j < column; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = `${word}`;
//                 td.style.border = `2px solid red`;
//                 tr.append(td);
//             }
//         }
//     }
//     createTable(width, height, text);
// };

// button.onclick = (e) => {
//     e.preventDefault();
//     const width = +input1.value;
//     const height = +input2.value;
//
//     const table = document.createElement('table');
//     document.body.append(table);
//
//     for (let i = 0; i < width; i++) {
//         const tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < height; j++) {
//             const td = document.createElement('td');
//             td.innerText = input3.value;
//             tr.append(td);
//         }
//     }
// };

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const width = +input1.value;
//     const height = +input2.value;
//
//     const table = document.createElement('table');
//     document.body.append(table);
//
//     for (let i = 0; i < width; i++) {
//         const tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < height; j++) {
//             const td = document.createElement('td');
//             td.innerText = input3.value;
//             tr.append(td);
//         }
//     }
// };

// const input1 = document.createElement('input');
// input1.setAttribute('type', 'number');
//
// const input2 = document.createElement('input');
// input2.setAttribute('type', 'number');
//
// const input3 = document.createElement('input');
//
// const button = document.createElement('button');
// button.innerText = 'create table';
//
// document.body.append(input1, input2, input3, button);
//
//
// button.onclick = () => {
//
//     const width = +input1.value;
//     const height = +input2.value;
//
//     const table = document.createElement('table');
//     table.style.border = `2px solid black`;
//     document.body.append(table);
//
//     for (let i = 0; i < width; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < height; j++) {
//             let td = document.createElement('td');
//             td.innerText = input3.value;
//             td.style.border = `2px solid red`;
//             tr.append(td);
//         }
//     }
// };

// const input1 = document.createElement('input');
// input1.setAttribute('type', 'number');
//
// const input2 = document.createElement('input');
// input2.setAttribute('type', 'number');
//
// const input3 = document.createElement('input');
//
// const button = document.createElement('button');
// button.innerText = 'create table';
//
// document.body.append(input1, input2, input3, button);
//
// button.onclick = () => {
//
//     const width = +input1.value;
//     const height = +input2.value;
//
//     const createTable = (raws, column) => {
//
//     const table = document.createElement('table');
//     table.style.border = `2px solid black`;
//     document.body.append(table);
//
//     for (let i = 0; i < raws; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < column; j++) {
//             let td = document.createElement('td');
//             td.innerText = input3.value;
//             td.style.border = `2px solid red`;
//             tr.append(td);
//         }
//     }
//     }
//     createTable(width, height);
// };
