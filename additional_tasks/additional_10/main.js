// - Сворити масив не цензцрних слів.
//  Сворити інпут текстового типу.
//  Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//  Перевірку робити при натисканні на кнопку

// let swearWordsArray = [
//     'arse',
//     'arsehead',
//     'arsehole',
//     'ass',
//     'asshole',
//     'bastard',
//     'bitch',
//     'bloody',
//     'bollocks',
//     'brotherfucker',
//     'bugger',
//     'child-fucker',
//     'Christ on a bike',
//     'Christ on a cracker',
//     'cock',
//     'cocksucker',
//     'crap',
//     'cunt',
//     'damn',
//     'damn it',
//     'dick',
//     'dickhead',
//     'dyke',
//     'fatherfucker',
//     'frigger',
//     'fuck',
//     'goddamn',
//     'godsdamn',
//     'hell',
//     'holy shit',
//     'horseshit',
//     'in shit',
//     'Jesus Christ',
//     'Jesus fuck',
//     'Jesus H. Christ',
//     'Jesus Harold Christ',
//     'Jesus wept',
//     'Jesus, Mary and Joseph',
//     'kike',
//     'motherfucker',
//     'nigga',
//     'nigra',
//     'piss',
//     'prick',
//     'pussy',
//     'shit',
//     'shit ass',
//     'shite',
//     'sisterfucker',
//     'slut',
//     'son of a bitch',
//     'son of a whore',
//     'spastic',
//     'sweet Jesus',
//     'twat',
//     'wanker',
//     'a я ебу',
//     'без пиздежа',
//     'без пизды',
//     'бля',
//     'бля буду',
//     'блядовать',
//     'блядовитый',
//     'блядовозка',
//     'блядский',
//     'блядовитый',
//     'блядь',
//     'блядина',
//     'блядюга',
//     'блядина',
//     'блядюга',
//     'блядь',
//     'блядюган',
//     'бляха муха',
//     'блядь',
//     'в ахуе',
//     'вздрючить',
//     'выебать',
//     'взъебать',
//     'въебать',
//     'вот блядь',
//     'в пизду',
//     'выблядок',
//     'выебанный',
//     'выебать',
//     'выебины',
//     'выебнуться',
//     'выебоны',
//     'выебосы',
//     'выёбисто',
//     'выёбистый',
//     'выёбываться',
//     'глухуеватый',
//     'говно',
//     'говнюк',
//     'гондон',
//     'доёбывать',
//     'доёбываться',
//     'долбоёб',
//     'допиздеться',
//     'до пизды',
//     'до святого проеба',
//     'до хуя',
//     'дрочилка',
//     'дрочить',
//     'дрочиться',
//     'дрочун',
//     'ебала жаба гадюку',
//     'ебало',
//     'ебальник',
//     'ебандей',
//     'ебанутый',
//     'ебануть',
//     'ебануться',
//     'ебать',
//     'ебать-ебать',
//     'бать-копать',
//     'ебаться',
//     'ебать ту Люську',
//     'ебать-тарахтеть',
//     'ебеныть',
//     'ебиздить',
//     'ебись ты злоебучим проебом',
//     'ебическая',
//     'еблысь',
//     'ебля',
//     'ебловать',
//     'еблом торговать',
//     'ебстись',
//     'ебуня',
//     'ебучий',
//     'єбала жаба гадюку',
//     'єбало',
//     'єбальник',
//     'єбандей',
//     'єбанутый',
//     'єбануть',
//     'єбануться',
//     'єбать',
//     'єбать-ебать',
//     'єбать-копать',
//     'єбаться',
//     'ебать ту Люську',
//     'ебать-тарахтеть',
//     'єбеныть',
//     'єбиздить',
//     'єбись ты злоебучим проебом',
//     'єбическая',
//     'єблысь',
//     'єбля',
//     'єбловать',
//     'єблом торговать',
//     'єбстись',
//     'єбуня',
//     'єебучий',
//     'банный в рот',
//     'ёбаный в рот',
//     'ёбарь',
//     'ёби-ёби',
//     'ёбнутый',
//     'бнуться',
//     'ёбом токнуть',
//     'ёб твою мать',
//     'жопа',
//     'заебать',
//     'заебаться',
//     'заебись',
//     'заёб',
//     'заёбанный',
//     'залупа',
//     'залупиться',
//     'запиздячить',
//     'захуярить',
//     'злоебучий',
//     'злопидар',
//     'какого хуя',
//     'как хуем',
//     'к ебеням',
//     'клара Целкин',
//     'колдоёбины',
//     'кончать',
//     'конченный',
//     'курва ',
//     'лярва',
//     'мозги ебат',
//     'мозгоёб',
//     'мудак',
//     'мудило',
//     'мудозвон',
//     'мудопоёбище',
//     'наебать',
//     'наебнуть',
//     'наёбка',
//     'наёбник',
//     'наперепиздяй',
//     'напидарасить ботинки',
//     'напиз',
//     'нахуй',
//     'нахуя',
//     'нахуяриться',
//     'невъебезно',
//     'не ебите мне мозги',
//     'нездоровая хуйня',
//     'не пиздеть была команда',
//     'нехуёвый – непоганий, хороший',
//     'нехуй',
//     'ни в пизду, ни в Красную Армию',
//     'ни с хуя',
//     'объебать –обманути',
//     'однохуйственный',
//     'опизденение',
//     'остоебенить',
//     'остоебеть',
//     'отпиздить',
//     'отпиздохать',
//     'отхуярить',
//     'отъебать',
//     'отъебаться',
//     'охуение',
//     'охуенно',
//     'охуенный',
//     'охуеть',
//     'охуйный',
//     'педрило',
//     'переебать',
//     'пидар',
//     'пидарас',
//     'пидарасить',
//     'пидарастический',
//     'пизда',
//     'пизданутый',
//     'пиздануть',
//     'пиздарики',
//     'пизда рулям',
//     'пиздатый',
//     'пиздень',
//     'пиздеть',
//     'пиздец',
//     'пиздец',
//     'пиздец',
//     'пиздёж',
//     'пиздилка',
//     'пиздить',
//     'пиздиться',
//     'пиздишь косой',
//     'пиздливый',
//     'пиздоблядский',
//     'пиздобол',
//     'пиздобратия',
//     'пиздоватизм',
//     'пиздоватый',
//     'пиздовать',
//     'пиздожадность',
//     'пиздозавр',
//     'пиздой накрыться',
//     'пиздопротивный',
//     'пиздотня',
//     'пиздрон',
//     'пиздун',
//     'пиздун твоя фамилия',
//     'пиздык',
//     'пиздыкнуться',
//     'пиздюк',
//     'пиздюлей дать',
//     'пиздюлина',
//     'пиздячить',
//     'пиздячшить',
//     'поблядушка',
//     'подпёздывать',
//     'подъёб',
//     'подъёбка',
//     'подъёбщик',
//     'подъёбывать',
//     'поебать',
//     'поебеньщик',
//     'поебень',
//     'поеботина',
//     'попиздеть',
//     'попиздить',
//     'попизженный',
//     'похуист',
//     'похуистический',
//     'похуй',
//     'по хую',
//     'приебаться',
//     'припиздячить',
//     'припиздяшить',
//     'припизженный',
//     'проблядь',
//     'проебать',
//     'проебом',
//     'пропиздон',
//     'разбляду ж твою мать',
//     'разъебать',
//     'разъебошить',
//     'разъёбанный',
//     'распиздеть',
//     'распиздеться',
//     'распиздяй',
//     'распоебаться',
//     'расхуярить',
//     'семихуй',
//     'скосопиздить',
//     'скурвиться',
//     'смехуёчки',
//     'спиздеть',
//     'спиздить',
//     'сука',
//     'съебаться',
//     'съебнуть',
//     'триебущий',
//     'тристапиздоблядоящер',
//     'уебать',
//     'уёбище',
//     'уёбище лесное',
//     'уёбок',
//     'уёбывать',
//     'уёбен зи биттэ',
//     'упиздень',
//     'упиздить',
//     'упиздюхать',
//     'ухуярить',
//     'ухты – хуюхты',
//     'фак ю',
//     'хитровыебанный',
//     'хуева гора',
//     'хуеплёт',
//     'хуесос',
//     'хуетень',
//     'хуеть',
//     'хуёвина',
//     'хуёво',
//     'хуёвый',
//     'хуиный',
//     'хуи пинать',
//     'хуи валять',
//     'хуй',
//     'хуй его',
//     'хуй его знает',
//     'хуйло',
//     'хуй на',
//     'хуй на ны',
//     'хуй на палочке',
//     'хуйнёй страдать',
//     'хуйнуть',
//     'хуйня',
//     'хуй там',
//     'хуюшки',
//     'хуя',
//     'хуяк',
//     'хуярить',
//     'хуячить',
//     'целка',
//     'целка – фанатичка',
//     'ЦПХ',
//     'цпх',
//     'центральное пиздохранилище',
//     'чмо',
//     'чмошный',
//     'что за нахуй',
//     'шароёбиться',
// ];

// console.log(swearWordsArray.length);
//
// const input = document.createElement('input');
//
// const button = document.createElement('button');
// button.innerText = 'click';
//
// document.body.append(input, button);
//
// button.onclick = () => {
//     swearWordsArray.map(swearWord => {
//         if (input.value === swearWord) {
//             alert('you are bed boy');
//         }
//     })
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// const input = document.createElement('input');
// input.setAttribute('type', 'text');
//
// const button = document.createElement('button');
// button.innerText = 'click here';
//
// document.body.append(input, button);
//
// button.onclick = () => {
//     swearWordsArray.map(word => {
//         if (input.value.includes(word)){
//             alert('wow wow, easy');
//         }
//     })
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// const ul = document.createElement('ul');
// ul.innerHTML = '<h2>menu</h2>';
// document.body.append(ul);
//
// const li1 = document.createElement('li');
// li1.innerText = 'list 1';
// li1.classList.add('menuEl');
//
// const li2 = document.createElement('li');
// li2.innerText = 'list 2';
// li2.classList.add('menuEl');
//
// const li3 = document.createElement('li');
// li3.innerText = 'list 3';
// li3.classList.add('menuEl');
//
// const li4 = document.createElement('li');
// li4.innerText = 'list 4';
// li4.classList.add('menuEl');
//
// const li5 = document.createElement('li');
// li5.innerText = 'list 5';
// li5.classList.add('menuEl');
//
// ul.append(li1, li2, li3, li4, li5);
//
// ul.onclick = () => {
//     li1.classList.toggle('hidden');
//     li2.classList.toggle('hidden');
//     li3.classList.toggle('hidden');
//     li4.classList.toggle('hidden');
//     li5.classList.toggle('hidden');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let commentsList = [
//     {
//         title: 'lorem1',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem dolo sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx sit ameti svcd dsbf  fbx c  dfbx dbfcgbdvx cxdvx '
//     },
//     {
//         title: 'lorem2',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem3',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem4',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem5',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem6',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem7',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem8',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem9',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
//     {
//         title: 'lorem1',
//         body: 'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'
//     },
// ];
//
// for (const comment of commentsList) {
//
//     const divMain = document.createElement('div');
//     document.body.appendChild(divMain);
//
//     const title = document.createElement('h2');
//     title.innerText = comment.title;
//
//     const body = document.createElement('p');
//     body.innerText = comment.body;
//
//     const button = document.createElement('button');
//     button.innerText = 'hide';
//
//     divMain.append(title, body, button);
//
//     button.onclick = () => {
//         body.classList.toggle('hidden');
//     }
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// const button = document.createElement('button');
// button.innerText = 'hide me';
// document.body.append(button);
//
// button.onclick = () => {
//     button.style.display = 'none';
// };

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.onclick = () => {
//     console.log(document.tagName);
//     console.log(document.classList);
//     console.log(document.body.id);
//     // console.log(document.body.id);
// };

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
];

for (const user of usersWithAddress) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.style.width = '18%';
    userDiv.innerHTML = `
        <p>ID: ${user.id}</p>
        <h3>Name: ${user.name}</h3>
        <p>Age: ${user.age}</p>
        <p>Status: ${user.status}</p>
        <p>Address: </p>
        <p>City: ${user.address.city}</p>
        <p>Street: ${user.address.street}</p>
        <p>Number: ${user.address.number}</p>
        <hr>
    `;
    document.body.append(userDiv);
    document.body.style.display = 'flex';
    document.body.style.flexWrap = 'wrap';
    document.body.style.justifyContent = 'spaseEvenly';
}

const form = document.createElement('form');
document.body.append(form);
form.style.width = '100%';
form.style.textAlign = 'center';

const check1 = document.createElement('input');
check1.setAttribute('type', 'checkbox');
check1.style.font = '50px'

const check2 = document.createElement('input');
check2.setAttribute('type', 'checkbox');

const check3 = document.createElement('input');
check3.setAttribute('type', 'checkbox');

form.append(check1, check2, check3);

check1.onclick = () => {
    const users = document.getElementsByClassName('user');
    console.log(users);
    for (const user of users) {
        console.log(user)
        if (user.value === 'false') {
            console.log(user);
        }
    }
    // const filter = users.filter(user => user.status === false);
    // console.log(filter);
    // const filter = users.filter(user => user.status === false);
    // console.log(filter);
};

check2.onclick = () => {
    const filter = usersWithAddress.filter(user => user.age >= 29);
    console.log(filter);
};

check3.oninput = () => {
    const filter = usersWithAddress.filter(user => user.address.city === 'Kyiv');
    console.log(filter);
};

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан