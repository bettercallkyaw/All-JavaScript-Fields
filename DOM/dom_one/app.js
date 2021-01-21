//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello World';
// ul.children[1].innerText = 'Htin Kyaw';
// ul.lastElementChild.innerHTML = 'Goodbye World';

 //const btn = document.querySelector('.btn');
// btn.style.background = 'coral';

// btn.addEventListener('click', (e) => { 
//     e.preventDefault();
    // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        //alert('please enter a fields');
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
