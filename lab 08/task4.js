/* Task4.js - Add your Java Script Code Here */
var roll1, roll2, roll3, roll4, roll5, roll6, average = "";

 
function rollDice(){
roll1 = Math.floor(Math.random() * 6);
roll2 = Math.floor(Math.random() * 6);
roll3 = Math.floor(Math.random() * 6);
roll4 = Math.floor(Math.random() * 6);
roll5 = Math.floor(Math.random() * 6);
roll6 = Math.floor(Math.random() * 6);

average = (roll1 + roll2 + roll3 + roll4 + roll5 + roll6)/6;
var average1 = average.toFixed(2);

document.getElementById("mydata").innerHTML = roll1 + " " + roll2 + ", " + roll3 + " " + roll4 + ", " +  roll5 + " " + roll6;
document.getElementById("mydata").innerHTML += "</br> Average = " + average1;

}