// console.log('welcome back rohit');
//Events:
// It is a special object that has details about the event,
// All event handlers have access to the Event Object's properties and methods.

const firClick = () => {
	document.body.style.backgroundColor = "#5F839E";
	document.body.style.color = "#E7644B";
}

// Button 2
let a = document.querySelector("#btn2");

a.onclick = () => {
	document.write('button 2 is clicked');
}


// Button 3
let btn3 = document.querySelector("#btn3");

btn3.ondblclick = () =>{
	document.write('btn 3 is clicked');
}

// Button 4:
btn4.addEventListener("click", () => {
	console.log('button 4 is clicked');
})