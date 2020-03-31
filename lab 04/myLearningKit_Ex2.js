function p01Func() {
	
  /* in Ex2, add a getElementById here to get the "probelm" div and 
     set its innerHTML to <p>I'm looking for a type of ...</p>
  */


  
  /* in Ex2, add a getElementById here to get "flowchart" img and 
     set its attribue src to dosaDesign.jpg. Note that dosa images are 
	 in subfolder dosa inside images folder.
  */


  
  /* in Ex2, add a getElementById here to get "flowchart" img and 
     set the display property of its style to none
  */

  
  
  /* in Ex2, repeat the above two steps for "js" img here
     for the image that is shown for "js", use dosa1.jpg 
  */
 
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>";
  document.getElementById("check2").checked=false;

  setAttribute() 
    document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
    document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
    document.getElementById("js").setAttribute("src","images/dosa/dosa2.jpg");  
    display: none;
}


/* in Ex3, uncomment the following function and complete it*/

/* remove this line
function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "inline"	 

	 
  }
  else {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "none"	 
	  
	  
  }
}
remove this line */

/* remove this line
function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "inline"	 
	 
	 
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "none"	 
	  
	  
  }
}
remove this line */

/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/



/* in Ex4, create function p02Func similar to p01Func */

/* in Ex5, create functions zoomIn() and zoomOut() */
