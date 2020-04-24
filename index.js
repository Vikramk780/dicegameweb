
var randomNumber1=Math.random()*6;
var correctNumber1=Math.floor(randomNumber1)+1;

var imageSet="images/dice" + correctNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSet);


var randomNumber2=Math.random()*6;
var correctNumber2=Math.floor(randomNumber2)+1;

var imageSet="images/dice" + correctNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",imageSet);
if(correctNumber2>correctNumber1){
  document.querySelector("h1").innerHTML="Player2 is winner";
}
else if(correctNumber2===correctNumber1){
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="Player1 is winner";
}
