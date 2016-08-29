const prompt = require('prompt-sync')();
console.log(prompt);
var money = 100;

while (money > 0){
  var number = randNum();
  // console.log("number is "+ number);
  var playerNum = prompt("Guess a number between 1 to 10");
  var bet = prompt("How much money do you want to bet?");

  if(playerNum === number.toString()){
    console.log("That's right number");
    money += parseInt(bet);
  }else{
    console.log("That's not rigth number");
    money -= parseInt(bet);
  }
  console.log("Money left is $" + money + ".");
}

  function randNum(){
    return Math.floor((Math.random() * 10) + 1);  
  }