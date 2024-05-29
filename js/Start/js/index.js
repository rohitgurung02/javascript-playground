
// let a = document.querySelector('#btn_1').onclick = () =>{
// document.querySelector('#smn').innerHTML = 'Here is your content';
// document.querySelector('#smn').style.color = 'red';
// };

//105.) Object Constructor:
// function phone(make,model,warranty,color,){
//     this.make = make;
//     this.model = model;
//     this.warranty = warranty;
//     this.color = color;
//     this.extendWarranty = function(z){
//         this.warranty += z;
//     }
// };

// let myPhone = new phone("Samsung","Galaxy S24",3,"Grey");
// // window.console.log(myPhone);
// myPhone.extendWarranty(8);
// console.log(myPhone);

//-----------Arrays------>
let putData = ['car','bus','truck','bikes'];

putData.forEach((e) =>{
    document.querySelector("#added_Data").innerHTML += "<br />" + e;
});
// putData.splice(0,2);
putData.sort();
console.log(putData);
// showItems(putData[0]);
// showItems(putData[1]);
// showItems(putData[2]);
// function showItems(x){
//     document.querySelector("#added_Data").innerHTML += "<br />" + x;
// }