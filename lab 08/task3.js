/* Task3.js - Add your Java Script Code Here */
var amount = 0;

function calculateAmount(num) {

    switch (num) {
        case 1:
            amount += 0.05;
            break;
        case 2:
            amount += 0.10;
            break;
        case 3:
            amount += 0.25;
            break;
        case 4:
            amount += 1.0;
            break;
        case 5:
            amount += 2.0;
            break;
    }
    var amount1 = amount.toFixed(2);
    document.getElementById("mydata").innerHTML = "Amount = $" + amount1;
}