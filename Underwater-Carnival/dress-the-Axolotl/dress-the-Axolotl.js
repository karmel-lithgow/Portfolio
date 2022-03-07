


// *** STEP 1 *** function that can change the *head* image of the axolotl.
    // added id tags to the dress-the-axolotl.html images. (id = headPic, bodyPic, shoesPic)
    // create variables from the image elements below (head, body, shoes) (so that this can be changed)

    let head = document.getElementById("headPic")
    let body = document.getElementById("bodyPic")
    let shoes = document.getElementById("shoesPic")
    
    
      // variable to store the current number of the "headPic", "bodyPic", "shoesPic"  ((this are refered to as an index))
    let countHead = 0;
    let countBody = 0;
    let countShoes = 0;
    


    
    // *** STEP 2 *** create a function which will change the image source, and then add one to the 'countHead' variable.
    

    /* The entire step 2 to be commented out, as I am re-writing this to incorporate all head, body, and shoes, but want to keep this for reference)
    function changeClownHead(){ // this is for the right arrow function
     
        // creates a variable which creates a string which we will use to alter the image source (while incorporating the countHead)
      var headSrc = "./images/head" + countHead + ".png"
    
    
      // changes the image source
      head.src = headSrc
      countHead += 1;
    
      //attempt to make it stop at the sixth picture and restart
      if (head.src.match ("./images/head5.png")) {
        countHead = 0;
      } 
    
    
      console.log(countHead); // this just used for me to check that the count is working correctly.
    }
    
    
    
    
    function changeClownHeadLeft(){ // this is for the left arrow function
     
      // creates a variable which creates a string which we will use to alter the image source (while incorporating the countHead)
    var headSrc = "./images/head" + countHead + ".png"
    
    
    // changes the image source
    head.src = headSrc
    countHead -= 1;
    
    //attempt to make it stop at the first picture and restart
    if (head.src.match ("./images/head0.png")) {
      countHead = 5;
    } 
    
    
    //console.log(countHead); // this just used for me to check that the count is working correctly.
    }
    
    */
    
    
    
    
    
    
    
    // **** STEP 3 **** use arrow keys to make changes to the images
    
    
    // below copy and pasted from google, to enable use of arrow keys.
    document.onkeydown = checkKey;
    
    function checkKey(e) {
    
    
        if (e.keyCode == '38') {
            // up arrow
            verticalMovementUp();
          
        }
        else if (e.keyCode == '40') {
            // down arrow
            verticalMovementDown();
        }
        else if (e.keyCode == '37') {
           // left arrow
           changeClownLeft();
          
         
        }
        else if (e.keyCode == '39') {
           // right arrow
           changeClownRight()
           
        }
    
    }
    
    
    // ***STEP 4*** create a new index which keeps track of which body parts you are currently selecting clothes for:
    
let fullClown = 0 // this index is for the whole clown image. We can then use this in our above code to identify each section.

function verticalMovementUp() {
 
  if (fullClown === 2) {
      fullClown -= 1
  
    }else if (fullClown ===1) {
      fullClown -= 1

    }else (fullClown ===0)
    console.log("end");


  
console.log(fullClown);
}

function verticalMovementDown(){

if (fullClown < 2 ){
    fullClown += 1
    

    console.log(fullClown);
}
}
     
    
    
//***Step 5 ***/ - now we will rewrite the step 2 functions to incorporate all elements:



function changeClownRight(){ // this is for the right arrow function
     
  // creates a variable which creates a string which we will use to alter the image source (while incorporating the countHead)
var headSrc = "./images/head" + countHead + ".png"

// if the whole body shows 0 (which is the head element) then...

if (fullClown === 0) {

// changes the image source
head.src = headSrc
countHead += 1;

//attempt to make it stop at the sixth picture and restart
if (head.src.match ("./images/head5.png")) {
  countHead = 0;
}
} 




// for the body element
var bodySrc = "./images/body" + countBody + ".png"

if (fullClown === 1) {

  // changes the image source
  body.src = bodySrc
  countBody += 1;
  
  //attempt to make it stop at the sixth picture and restart
  if (body.src.match ("./images/body5.png")) {
    countBody = 0;
  }
  } 



  // for the shoes element
var shoesSrc = "./images/shoes" + countShoes + ".png"

if (fullClown === 2) {

  // changes the image source
  shoes.src = shoesSrc
  countShoes += 1;
  
  //attempt to make it stop at the sixth picture and restart
  if (shoes.src.match ("./images/shoes5.png")) {
    countShoes = 0;
  }
  } 


console.log(countHead); // this just used for me to check that the count is working correctly.
}




function changeClownLeft(){ // this is for the left arrow function
     
  // creates a variable which creates a string which we will use to alter the image source (while incorporating the countHead)
var headSrc = "./images/head" + countHead + ".png"


// if the whole body shows 0 (which is the head element) then...

if (fullClown === 0) {

// changes the image source
head.src = headSrc
countHead -= 1;

//attempt to make it stop at the first picture and restart
if (head.src.match ("./images/head0.png")) {
  countHead = 5;
} 


//console.log(countHead); // this just used for me to check that the count is working correctly.
}


//for the body
var bodySrc = "./images/body" + countBody + ".png"


// if the whole body shows 0 (which is the head element) then...

if (fullClown === 1) {

// changes the image source
body.src = bodySrc
countBody -= 1;

//attempt to make it stop at the first picture and restart
if (body.src.match ("./images/body0.png")) {
  countBody = 5;
} 

}



//for the shoes
var shoesSrc = "./images/shoes" + countShoes + ".png"


// if the whole body shows 0 (which is the head element) then...

if (fullClown === 2) {

// changes the image source
shoes.src = shoesSrc
countShoes -= 1;

//attempt to make it stop at the first picture and restart
if (shoes.src.match ("./images/shoes0.png")) {
  countShoes = 5;
} 

}






}