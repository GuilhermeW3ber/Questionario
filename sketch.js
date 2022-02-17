var canvas, backgroundImage;

var questions;

var question, contestant, quiz, endWarning;
var quizState=0;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("lightblue");


  if(quizState===1){
    fill(green);
    textSize(20);
    text("Answer registered");
  }
}
function keyPressed(){
  if(keyCode===32){
    quizState=quizState+1
    console.log("quizState+1")
  }


}