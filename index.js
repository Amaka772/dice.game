var randNum=(Math.random()*6);
var randNum=Math.floor(randNum);
var randNum=randNum+1;
console.log(randNum);

var randNum1=(Math.random()*6);
var randNum1=Math.floor(randNum1);
var randNum1=randNum1+1;
console.log(randNum1);


document.querySelector(".img1").setAttribute("src","./images/dice"+randNum+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randNum1+".png");

if(randNum>randNum1){
   document.querySelector("h1").textContent=(" Player 1 wins"); 
}
else if(randNum<randNum1){
    document.querySelector("h1").textContent=(" Player 2 wins");
}
else if(randNum===randNum1){
    document.querySelector("h1").textContent=("It's a draw 🚩");
}
