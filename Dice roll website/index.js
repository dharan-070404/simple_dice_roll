var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage1="images/dice"+randomNumber1+".png";
var randomdiceimage2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomdiceimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);  //we can either use queryselectorall or getElementsByClassname() with the corresponding index to change the attribute src.

if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}