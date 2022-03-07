



// ***STEP 1*** make each square identifiable. For this purpose, the table will be divided into x (horizonal) and y (vertical). Giving each square an (x,y) value based on its horizonal/vertical position. e.g very left top corner will be (0,0). I have added id tags to the squish-the-fish.html page in the <td> tags.



//***STEP 2*** put the squares into an array - I have changed the table tag to have name 'squish-the-fish' and now have the two getElementsById to get the information from.

let square = document.getElementById("squish-the-fish").getElementsByTagName('td');

//console.log(square);            // This console logs all of the squares 
//console.log(square[0]);         // This is an example to show you can pick out specific squares.





//***STEP 3*** write a function that will randomly select one square (to eventurally put the fish into).

var randomSquare = square[Math.floor(Math.random()*square.length)];

//console.log(randomSquare);        // shows me that this does generate a random square





// ***STEP 4*** put the fish image into the randomSquare

var fishPic = document.createElement("img"); 

        // picture source
fishPic.src = "fish.png"; 
        // size of the picture
fishPic.width = "70"

        // this part adds the fishPic as a 'child' to the square <td> 
randomSquare.appendChild(fishPic);




/*
// *** Step 4.5 *** I need to put my earlier code into a function so that it can be re-run during Step5

function randomlyGenerateThatFish(){

  var randomSquare = square[Math.floor(Math.random()*square.length)];
  var randomSquare = square[Math.floor(Math.random()*square.length)];
  
  var molePic = document.createElement("img"); 
  molePic.src = "fish.png"; 
  molePic.width = "70"

  randomSquare.appendChild(fishPic);



}
*/




// ***STEP 5*** Add an onclick function called whackedFish which will remove the mole, 
//              and then re use the code made earlier to respawn the mole.


fishPic.onclick = function squishedFish() {

  
  //creates a notification that the mole was squished
  console.log("Damn, you squished him!");


  // removes the molePic from the board
  randomSquare.removeChild(fishPic);

  //resets the board
  randomSquare = square[Math.floor(Math.random()*square.length)];
  randomSquare.appendChild(fishPic);
  

 



  // ***STEP 6 add the sound effect
  var audio = new Audio ('squishSound.mp3');
  audio.play();

}

 






 
