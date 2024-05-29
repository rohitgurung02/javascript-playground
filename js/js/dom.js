console.log('welcome to DOM Manipulation');

//DOM: when a web page is loaded creates a Document Object Model.

// let a = document.querySelector('h2');
// a.style.color = "red";
// console.log(a);

//Properties:
// 1.) Tagname:
// 2.) innerText:
// 3.) innerHTML:
// 4.) textContent:

// ex:
// let a = document.querySelector('#abc').innerHTML;
// console.log(a);


//Create Elements in JavaScript:
// ex: 1.
// let para = document.createElement('p');
// let createNode = document.createTextNode('Para has been created');
// para.appendChild(createNode);
// document.body.appendChild(para);
// console.log(para);

//ex: 2.
// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.firstChild);


//How to add CSS in JavaScript DOM:

document.querySelector("#firstClass").style.color = "red";
document.body.color = "blue";




