// console.log('Hi Rohit');

// setTimeout( () => {
// 	console.log("Now it's working");
// }, 3000);

//Promise:
// let promise = new Promise((resolve, reject) => { // Promise has two states
// 	console.log("promise is in pending state");
// 	resolve("Promise resolved");
// });

// const getPromise = () =>{
// 	return new Promise((resolve,reject) =>{
// 		console.log("I am Promise");
// 		reject();
// 	});
// }

// let promise = getPromise();
// promise.then(() => {
// 	console.log("promise fulffiled");
// });
// promise.catch(() => {
// 	console.log("rejected");
// });

//Async-await
// it means to returns a promise.
function api(){
	return new Promise((resolve, reject) => {
		setTimeout( () => {
			console.log('weather data');
			resolve(200);
		}, 2000);
	});	
}

async function getWeatherData(){
	console.log("getting data 1");
	await api(1);
	console.log("getting data 2");
	await api(2);
	console.log("getting data 3");
	await api(3);
};

