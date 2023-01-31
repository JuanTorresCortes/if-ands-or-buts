const prompt = require('prompt-sync')({sigint: true});

 let player1 = prompt("player1 select rock, paper or scissors?: ");
 let player2 = prompt("player2 select rock, paper or scissors?: ");

// console.log(player1)
// console.log(player2)


 if(!player1 === "rock" && "paper" && "scissors" || !player2 === "rock" && "paper" && "scissors" ){
    console.log("input not valid")
 }else if(player1 === player2){
    console.log("cat wins")
 }else if(player1 === "rock" && player2 === "scissors"){
    console.log("player1 wins")
 }else if(player2 === "scissors" && player2 === "rock"){
    console.log("player2 wins")
 }else if(player1 === "rock" && player2 === "paper"){
    console.log("player2 wins")
 }else if(player1 === "paper" && player2 === "rock"){
    console.log("player1 wins")
 }else if(player1 === "scissors" && player2 === "paper"){
    console.log("player1 wins")
 }else if(player1 === "paper" && player2 === "scissors"){
    console.log("player2 wins")
 }