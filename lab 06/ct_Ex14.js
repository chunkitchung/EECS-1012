// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {

    /* this statement defines an object reference to the 
       html element that its ID is "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var num = prompt("Please enter a number: ", "");

    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + num + "<br><br> Fibonacci: ";

    // translate rest of your flowcharts to js here:
    var secondLast = 0;
    var last = 1;
    var newvalue;
    var string = "";
    for (i = 1; i <= num - 2; i++) {
        newvalue = secondLast + last;
        string += newvalue + ", ";
        secondLast = last;
        last = newvalue;
    }
    if (num == 1 || num == 0) {
        outputObj.innerHTML = "number: " + num + "<br><br>Please input a number that greater than 1<br><br>program ended";
    }
    else {
        outputObj.innerHTML = outputObj.innerHTML + "0, 1, " + string + "<br><br>program ended";
    }
    //the following statements inform the user that the program ended
    //and disable the button
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}



