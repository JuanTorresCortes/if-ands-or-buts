const prompt = require('prompt-sync')({sigint: true});
const pinCode = 1234;

 let myPin = Number(prompt("Enter a 4 digit pin code: "));

if(myPin == pinCode){
    console.log("success");
}else{console.log("failure")}
