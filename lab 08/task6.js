var i = 20;
/* Task6.js - Add your Java Script Code Here */

function countDown() {
    if (i <= 0) {
        document.getElementById("mydata").innerHTML = "liftoff!";
    }
    else {
        document.getElementById("mydata").innerHTML = i;
        i -= 1;
    }
}