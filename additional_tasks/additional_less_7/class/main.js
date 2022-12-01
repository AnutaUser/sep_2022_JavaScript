// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// let user = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// // class User {
// //     id;
// //     name;
// //     username;
// //     email;
// //     address = {
// //         street,
// //         suite,
// //         city,
// //         zipcode,
// //         geo: {lat, lng}
// //     };
// //     phone;
// //     website;
// //     company = {
// //         name,
// //         catchPhrase,
// //         bs,
// //     };
// // }
//
// class Class {
//     constructor(
//         id,
//         name,
//         username,
//         email,
//         address,
//         // address = {
//         //     street,
//         //     suite,
//         //     city,
//         //     zipcode,
//         //     geo: {lat, lng},
//         // },
//         phone,
//         website,
//         company = {
//             cName: name,
//             catchPhrase,
//             bs
//         }
//     ) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         // this.address.street = address.street;
//         // this.address.suite = address.suite;
//         // this.address.city = address.city;
//         // this.address.zipcode = address.zipcode;
//         // this.address.geo = address.geo;
//         // this.address.geo.lat = address.geo.lat;
//         // this.address.geo.lng = address.geo.lng;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//         // this.company.name = company.name;
//         // this.company.catchPhrase = company.catchPhrase;
//         // this.company.bs = company.bs;
//     }
// }
//
// let user1 = new Class(
//     1,
//     'Alina',
//     'Alia',
//     'alia@.com',
//     {street: 'street', geo: {lat: 'sdf-15sv-123', lng: 'ool45'}},
//     '888 888 888',
//     'https://owu.com',
//     { name: 'yoooo', catchPhrase:'gyubo', bs: 'bs1'}
// )
//
// console.log(user1);
//
// // -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// // -назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результуючого об'єкту
// // {
// //     titleOfTag: 'area',
// //     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }