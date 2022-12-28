// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const container = document.getElementsByClassName('container')[0];

const form = document.createElement('form');
form.action = '';
container.append(form);

const inputName = document.createElement('input');
inputName.placeholder = 'name';
inputName.classList.add('size');
inputName.type = 'string';

const inputNumber = document.createElement('input');
inputNumber.placeholder = 'number';
inputNumber.classList.add('size');
inputNumber.type = 'number';

const inputPrice = document.createElement('input');
inputPrice.placeholder = 'price';
inputPrice.classList.add('size');
inputPrice.type = 'number';

const inputImg = document.createElement('input');
inputImg.placeholder = 'image';
inputImg.classList.add('size');
inputImg.type = 'url';

const button = document.createElement('button');
button.innerText = 'add';
button.classList.add('size');

form.append(inputName, inputNumber, inputPrice, inputImg, button);

const btn = document.getElementsByClassName('button');

button.onclick = (e) => {
    e.preventDefault();

    const name = inputName.value;
    const number = inputNumber.value;
    const price = inputPrice.value;
    const img = inputImg.value;

    let products = JSON.parse(localStorage.getItem('products'));

    if (!products) {
        products = [];
    }

    products.push({id: new Date(), name, number, price, img});

    localStorage.setItem('products', JSON.stringify(products));
};
