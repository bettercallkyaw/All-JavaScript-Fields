var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#333';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#333';
// console.log(itemList.parentElement.parentElement.parentElement);

//childnode
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';

//FirstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello dom';

//lastChild
// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent = 'Goodbye World';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//create element

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'goodbye';

//add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);