// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
// }
//
// let usersArray = [];
// let userNames = [
//     'Olya', 'Katya', 'Oleg', 'Ira', 'Ewa', 'Lilya', 'Ivan', 'Petro', 'Jon', 'Elisa',
//     'Anna', 'Vova', 'Stepan', 'Iza', 'Kolya', 'Lilya', 'Ivan', 'Petro', 'Jon', 'Elisa'
// ];
// let userSurnames = [
//     'Petrowa', 'Pupkina', 'Ivanov', 'Buba', 'Klish', 'Grecham', 'Perov', 'Durak', 'Smith', 'Ivanova',
//     'Duda', 'Kozak', 'Myrnyj', 'Philaphek', 'Smirnov', 'Byrych', 'Gerych', 'Kostyk', 'Karter', 'Elisa'
// ];
// let userEmail = [
//     'Olya@i.ua', 'Katya@i.ua', 'Oleg@i.ua', 'Ira@i.ua', 'Ewa@i.ua', 'Lilya@i.ua', 'Ivan@i.ua', 'Petro@i.ua', 'Jon@i.ua', 'Elisa@i.ua',
//     'Anna@i.ua', 'Vova@i.ua', 'Stepan@i.ua', 'Iza@i.ua', 'Kolya@i.ua', 'Lilya@i.ua', 'Ivan123@i.ua', 'Petro123@i.ua', 'Jon123@i.ua', 'Elisa123@i.ua'
// ];
//
// for (let i = 0; i < 20; i++) {
//     usersArray[i] = new User(i + 1, userNames[i], userSurnames[i], userEmail[i]);
// }
//
// console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(usersArray.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(usersArray.sort((a, b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clientsArray = [
//     new Client(1, 'Vasyl', 'Pupkin', 'pupik@com.ua', '0970001111', ['milk', 'egs', 'bread']),
//     new Client(2, 'Ira', 'Petrova', 'petrova@com.ua', '+380123456789', ['cafe', 'egs', 'bread', 'bananas']),
//     new Client(3, 'Anna', 'Duda', 'Anna@i.ua', '+380987654321', ['bread', 'bananas']),
//     new Client(4, 'Vova', 'Kozak', 'Vova@i.ua', '+380987654123', ['bananas']),
//     new Client(5, 'Stepan', 'Myrnyj', 'Stepan@i.ua', '+380123654789', ['cafe', 'egs', 'bread', 'bananas', 'sweets']),
//     new Client(6, 'Iza', 'Philaphek', 'Iza@i.ua', '+380963258741', ['tea', 'egs', 'bread', 'bananas']),
//     new Client(7, 'Kolya', 'Smirnov', 'Kolya@i.ua', '+380963258741', ['egs', 'bread', 'bananas']),
//     new Client(8, 'Lilya', 'Byrych', 'Lilya@i.ua', '+380741258963', ['cafe', 'tea', 'pen', 'bananas']),
//     new Client(9, 'Ivan', 'Gerych', 'Ivan123@i.ua', '+380147852369', ['note', 'candle', 'book', 'phone']),
//     new Client(10, 'Petro', 'Kostyk', 'Petro123@i.ua', '+380521478963', ['lego', 'sweets']),
//
// ];
// console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`
//         Model: ${this.model}
//         Producer: ${this.producer}
//         Year: ${this.year}
//         Max Speed: ${this.maxSpeed}
//         Engine: ${this.engine}
//         `)
//     };
//     this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//     this.changeYear = (newValue) => this.year = newValue;
//     this.addDriver =  (driver) => this.driver = driver;
// }
//
// const car1 = new Car('toyota', 'Toyota Motor Corporation', 2015, 320, '1,6');
// const car2 = new Car('mazda', 'Mazda Motor Corporation', 2018, 280, '2.0');
//
// console.log(car1);
// console.log(car2);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// console.log(car1);
//
// car1.changeYear(2000);
// console.log(car1);
// car1.addDriver([{name: 'Vasyl', age: 36, experience: 12}, {name: 'Oleg', age: 50, experience: 40}]);
//
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     info() {
//         console.log(`
//         Модель: ${this.model}
//         Виробник: ${this.producer}
//         Рік випуску: ${this.year}
//         Максимальна швидкість: ${this.maxSpeed} на годину
//         Обєм двигуна: ${this.engine}
//         `)
//     };
//
//     increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//
//     changeYear = (newValue) => this.year = newValue;
//
//     addDriver = (driver) => this.drivers = driver;
// }
//
// const car1 = new Car('toyota', 'Toyota Motor Corporation', 2015, 320, '1,6');
// const car2 = new Car('mazda', 'Mazda Motor Corporation', 2018, 280, '2.0');
//
// console.log(car1, car2);
//
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(20);
// car2.changeYear(2005);
// car2.addDriver([{name: 'Olha', age: 35, experience: 15}, {name: 'Ivan', age: 49, experience: 31}])
// console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Princess {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// const princessArray = [
//     new Princess('Ariel', 18, 37),
//     new Princess('Pocahontas', 21, 36),
//     new Princess('Snow White', 25, 38),
//     new Princess('Belle', 18, 37),
//     new Princess('Rapunzel', 18, 36.5),
//     new Princess('Merida', 18, 39),
//     new Princess('Moana', 18, 37),
//     new Princess('Mulan', 18, 35.5),
//     new Princess('Raya', 18, 37),
//     new Princess('Cinderella', 18, 35),
// ];
//
// console.log(princessArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoeHeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
// }
//
// let prince = new Prince('Harold', 25, 35);
//
// console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// for (const princess of princessArray) {
//     if (princess.shoe === prince.shoeHeFound) {
//         prince = {...prince, wife: princess};
//     }
//
// }
// console.log(prince);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// const wifeForPrince = princessArray.find(princess => princess.shoe === prince.shoeHeFound);
// prince = {...prince, wife: wifeForPrince};
//
// console.log(prince);
