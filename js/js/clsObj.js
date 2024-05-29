
// 1.Class
// console.log('Hello Rohit');

// class ToyotaCar{
// 	start(){
// 		console.log("start");
// 	}

// 	stop(){
// 		console.log("stop");
// 	}
// }

// let fortuner = new ToyotaCar();


// 2.Inheritance::
// class Person{
// 	eat(){
// 		console.log("We eat");
// 	}
// 	sleep(){
// 		console.log("sleep");
// 	}
// }

// class student extends Person{
// 	study(){
// 		console.log("student do study");
// 	}
// }

// class employee extends Person{
// 	work(){
// 		console.log("employee do work everyday");
// 	}
// }

// let rohitObj = new employee();

// 3.Super

// class Person{
// 	constructor(){
// 		console.log('first parent constructor');
// 		this.parents = "our parents";
// 	}
// 	eat(){
// 		console.log('we eat');
// 	}
// }

// class employee extends Person{
// 	constructor(branch){
// 		console.log('second child constructor');
// 		super()
// 		this.branch = branch;
// 		console.log('exit child constructor');
// 	}
// 	work(){
// 		console.log("employee also do work");
// 	}
// }

// let rohitObj = new employee();

//Ex:
let data = "Secret Infomation";

class user{
	constructor(name,address){
		this.name = name;
		this.address = address;
	}
	showData(){
		console.log("data = ",data);
	}
}

let std1 = new user("rohit", "dharamshala");



