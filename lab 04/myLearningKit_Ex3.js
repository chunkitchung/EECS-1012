function p01Func() {
	
    document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>";
  
   
   document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
   document.getElementById("flowchart").style.display="none";
 
   
   document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
   document.getElementById("js").style.display="none";
 
   document.getElementById("another").setAttribute("src","images/dosa/dosa2.jpg");
   document.getElementById("another").style.display="none";    
 
    /* the following two lines gets the checkboxes that their ID is check1
       and check2, and unchecks them
    */

   
    document.getElementById("check2").checked=false;
  }
  /* in Ex3, uncomment the following function and complete it*/
  
  function checkUncheck1(){
    if (document.getElementById("check1").checked===true) {
        // document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
        document.getElementById("flowchart").style.display="inline";
    }
    else {
   //  document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
        document.getElementById("flowchart").style.display="none";
      
    }
  }
  
  function checkUncheck2(){
    if (document.getElementById("check2").checked===true) {
        // document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
        document.getElementById("js").style.display="inline";
    }
    else {
        // document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
        document.getElementById("js").style.display="none";  
    }
  }
 
  /* in Ex4, or step 4 of Ex2, you need to create function
     checkUncheck3, which is similar to checkUncheck 1 and 2
  */

  
  /* in Ex4, create function p02Func similar to p01Func */
  
  /* in Ex5, create functions zoomIn() and zoomOut() */