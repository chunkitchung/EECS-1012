// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping() {
    //precondition: 
    // inputted value is between 0 and 100
      //Postcondition:
      // outputted value is a grade letter for the corresponding number grade                   
      var  gradeNum = document.getElementById("grade").value;
      gradeNum = parseInt(gradeNum);
     
              switch (true){
            case (gradeNum>89): 
               gradeLetter = "A+";
               break;
            case (gradeNum>79): 
            gradeLetter = "A";
               break;
           case (gradeNum>75): 
               gradeLetter = "B+";
               break;
           case (gradeNum>69): 
               gradeLetter = "B";
               break;
           case (gradeNum>65): 
               gradeLetter = "C+";
               break;
           case (gradeNum>59): 
               gradeLetter = "C";
               break;
           case (gradeNum>55): 
               gradeLetter = "D+";
               break;
           case (gradeNum>49): 
               gradeLetter = "D";
               break;
           case (gradeNum>40): 
               gradeLetter = "E";
               break;
             default:
               gradeLetter = "F";
           }
    
           document.getElementById("output").innerHTML = gradeLetter;

    }
    