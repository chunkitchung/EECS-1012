// in Ex9 to Ex15, change the name of the following function properly
function problem_15() {

    /* this statement defines an object reference to the 
       html element that its ID is "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var num = prompt("Please enter a number: ", "");

    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + num + "<br><br>";

    // translate rest of your flowcharts to js here:
    outputObj.style.textAlign = "left";
    outputObj.style.fontSize = "11px";
    var string = "";

    for (i = 0; i <= num; i++) {
        if (i == 0) {
            string += "XX<br>";
            i++;
        }
        else {
            for (j = 1; j < i; j++) {
                string += "XX ";
            }
            string += "XX<br>";
        }
    }
    outputObj.innerHTML = outputObj.innerHTML + string + "<br><br>program ended";

    //the following statements inform the user that the program ended
    //and disable the button
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");

}