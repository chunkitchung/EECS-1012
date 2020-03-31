// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function equation() {
    //precondition: 
    //	a b and c are real numbers used to calculate roots of a quadratic equation
   //Postcondition:
   //	The sum of the root(s) (if they exist) have been found                        
 
 
    /* in Ex1, change the following two lines such that 
       num1 and num2 are parsed to integer before be 
       assigned to w and h, respectively.                   */
    /* in Ex 2, rename w and h to a and b, respectively.    */
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
 
     a = parseInt(a);
     b = parseInt(b);
     c = parseInt(c);
    
     var discriminant = ((b*b)-(4*a*c)); 
     if (discriminant<0) {
        var root1 = "No roots";
        var root2 = "No roots";
     } 
     else {
        var discriminant = Math.sqrt(discriminant);
        var root1 = ((-b)+discriminant)/(2*a);
        var possibleRoot = ((-b)-discriminant)/(2*a);
        if (root1 != possibleRoot) {
           var root2 = possibleRoot;
           var root1 = root1.toFixed(2);
           var root2 = root2.toFixed(2);
        } 
        else {
           var root2 = "No roots";
           var root1 = root1.toFixed(2);
        }
    }

    /* in Ex5, you should delete from Line 15 to this line */
 
    /*   //in Ex 5, uncomment this block
    switch (true){
     case (a>89): 
        answer="A+";
        break;
     case (a>79): 
        answer="A";
        break;
        // in Ex5, you need to add more cases for other letter grades
     default:
        answer="F";
    }
    */
 
    /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
       to those problems, you may also need to rename s to a better 
       varibale that you have in your formulas above */
       document.getElementById("output").innerHTML = "one root: " + root1 + "<br> another root:" + root2;
 
 }
 