/* Task5.js - Add your Java Script Code Here */
function date() {
    var myDate = new Date();

    var day = myDate.getDay();
    var month = myDate.getMonth();
    var date = myDate.getDate();
    var year = myDate.getFullYear();

    var dWeek = ["Sun", "Mon", "Tues", "Weds", "Thur", "Fri", "Sat"];
    var month1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


 


     document.getElementById("mydata").innerHTML = "Today is " + dWeek[day] + ", </br>" + month1[month] + " " + date + ", " + year;

}