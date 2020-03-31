// in Ex9 to Ex15, change the name of the following function properly
function problem_10() {

    /* this statement defines an object reference to the 
       html element that its ID is "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var num = prompt("Please enter a number: ", "");
    var i = "";


    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + num + "<br><br>number of 7's: ";

    // translate rest of your flowcharts to js here:

    var counter = 0;
    while (num > 0) {
        i = num % 10;
        if (i == 7) {
            counter++;
        }
        num = Math.floor(num / 10)
    }

    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML += counter;
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}
