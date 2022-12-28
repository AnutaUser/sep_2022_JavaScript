let products = 'products';
const productsArray = JSON.parse(localStorage.getItem(products));

let container = document.getElementById('container');

console.log(productsArray);

productsArray.forEach(product => {
    const productDiv = document.createElement('div');
    container.append(productDiv);
    productDiv.classList.add('productDiv');
    productDiv.innerHTML = `
    <div>${product.name}</div>
    <div>${product.number} Price: ${product.price}$</div>
    <img src="${product.img}" alt="${product.name}"/>
    `;

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');

    const dellBtn = document.createElement('button');
    dellBtn.innerText = 'delete';

    productDiv.appendChild(btnDiv);
    btnDiv.appendChild(dellBtn);

    dellBtn.onclick = () => {
        productsArray.splice(product.id, 1);

        localStorage.setItem('products', JSON.stringify(productsArray));

        window.location.reload();
    };

});
