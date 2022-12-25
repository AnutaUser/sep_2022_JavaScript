// password
//
const input = document.createElement('input');
input.value = '';
input.type = 'password';
input.placeholder = 'enter password';

const button = document.createElement('button');
button.innerText ='click'
document.body.append(input, button);

button.onmousedown = () => {
    input.type = 'text';
}
button.onmouseup = () => {
    input.type = 'password';

}

// localStorage
//
// const ul = document.querySelector('ul');
//
// let visits = localStorage.getItem('visits');
// console.log(visits);
//
// if (!visits) {
//     visits = [];
//     localStorage.setItem('visits', JSON.stringify(visits));
// }
//
// const arrOfVisits = JSON.parse(localStorage.getItem('visits'));
// arrOfVisits.push(new Date());
//
// localStorage.setItem('visits', JSON.stringify(arrOfVisits));
//
// arrOfVisits.map(visit => {
//     const li = document.createElement('li');
//     li.innerText = visit;
//     ul.appendChild(li);
// });


// recursion

