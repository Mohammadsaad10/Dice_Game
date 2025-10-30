var randomNumber1 = Math.random() * 6; //to generate in the range 1-6 , actually it generates 0-5 then we add 1 .
randomNumber1 = Math.floor(randomNumber1) + 1; // kabhi bhi 0 na aaye isliye.

var randomDice = "dice"+randomNumber1+".png"; // to select random dice.

var randomDiceSrc = "images/"+randomDice; // making src path.

document.querySelector("img.img1").setAttribute("src",randomDiceSrc); // setting attribute value.


//now do same for second dice.
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDice2 = "dice"+randomNumber2+".png";

var randomDiceSrc2 = "images/"+randomDice2;

document.querySelector("img.img2").setAttribute("src",randomDiceSrc2);


//now for result.
if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩 Player1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}