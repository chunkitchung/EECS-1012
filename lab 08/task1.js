/* Task1.js - Add your Java Script Code Here */
function myFunction() {
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to heads or tails

  p = Math.random();
  document.getElementById("mydata").innerHTML = "num:";

  if (p >= 0.5) {
    document.getElementById("mydata").innerHTML = "tails";
  }
  else {
    document.getElementById("mydata").innerHTML = "heads";
  }
}
