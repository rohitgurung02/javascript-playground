//Functions of code that perform a specific task, can be invoked(call) whenever needed.

// myFunction = (msg) =>{// ()Parameter
// 	console.log(msg);
// }

// myFunction('I love JS'); // ()argument

// 1.)
// sum = (x,y) => {
// 	z = x + y;
// 	return z;
// }

// let val = sum(5,7);
// console.log(val);

// 2.)
// const multi = (a, b) => {
// 	return a * b;
// }

// let value1 = multi(2,5);
// console.log(value1);

// 3.) Create a function using the "function" keyword that takes a string as an argument & return
//the number of vowels in the string?
// Ans: 
// let vowels = (str) => {
// 	let count = 0;
// 	for(const char of str){
// 		if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
// 		{
// 		count++;
// 		}
// }

// console.log(count);
// }

// 4.)
//ForEach Loop()
//Function ko High order function/Methods(dusre function ko parameter ya kisi function ko return karte hai)
// bhi kehte hai(its also called a method associated with object and data structure).
//its also called a callback function passed as an argument to another function.

// let arr = ['pune','delhi','himachal'];
// arr.forEach((val,index) => {
// 	console.log(val,index);
// });

// let arr1 = [2,3,4,5,6,7,8];
// arr1.forEach((val1) => {
// 	console.log(val1 * val1);
// });

//Map() Methods
//map function creates a new array with the results of some operation. The value its callback returns
//are used to form new array.

// let arr2 = [2,3,4,5,6,7,8];

// let newArr = arr2.map((val2) => {
// 	return val2;
// });
// console.log(newArr);

//Filter() Method
//creates a new array of elements that give true for a condition/filter.

// let arr3 = [1,2,3,4,5,6,7,8,9,10];

// let newArr = arr3.filter((val)=>{
// 	return val % 2 === 0;
// });

// console.log(newArr);

// let arr3 = [1,2,3,4,5,6,7,8,9,10];

// let newArr = arr3.filter((val)=>{
// 	return val % 2 !== 0;
// });

// console.log(newArr);

//Reduce() Function

let arr4 = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr4.reduce((prev,curr) => {
	return prev > curr ? prev : curr;
});

console.log(newArr);



