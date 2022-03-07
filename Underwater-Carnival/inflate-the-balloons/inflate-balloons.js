// Karmel's Underwater Carnival - Inflate the Balloons //





//define the images by getElementById (have added id into the image tags on inflate-balloons.html)
let jellyFish0 = document.getElementById("jellyFish0")
let jellyFish1 = document.getElementById("jellyFish1")
let jellyFish2 = document.getElementById("jellyFish2")




//create a function which gets called everytime you click on the jellyfish. (onclick) - these functions have been added to the image tags on the inflate-balloons.html

function inflateJellyFish0(){
  // this section changes the picture of jellFish 0
  if(jellyFish0.src.match("jellyFishBalloon0")) {
    jellyFish0.src = "./images/jellyFishBalloon1.png";
  
  }else if (jellyFish0.src.match("jellyFishBalloon1.png")) {
    jellyFish0.src = "./images/jellyFishBalloon2.png"; 
  
  }else if (jellyFish0.src.match("jellyFishBalloon2.png")) {
    jellyFish0.src = "./images/jellyFishBalloon3.png"; 
  
  } else {
    alert("Old Jelly says: 'Thanks for helping me out!'");

  }
}



function inflateJellyFish1(){
    // this section changes the picture of jellFish 0
    if(jellyFish1.src.match("jellyFishBalloon0")) {
      jellyFish1.src = "./images/jellyFishBalloon1.png";
    
    }else if (jellyFish1.src.match("jellyFishBalloon1.png")) {
      jellyFish1.src = "./images/jellyFishBalloon2.png"; 
    
    }else if (jellyFish1.src.match("jellyFishBalloon2.png")) {
      jellyFish1.src = "./images/jellyFishBalloon3.png"; 
    
    } else {
      alert("Mr Percy says: 'I couldn't have done it without you!'");
  
    }
  }

  function inflateJellyFish2(){
    // this section changes the picture of jellFish 0
    if(jellyFish2.src.match("jellyFishBalloon0")) {
      jellyFish2.src = "./images/jellyFishBalloon1.png";
    
    }else if (jellyFish2.src.match("jellyFishBalloon1.png")) {
      jellyFish2.src = "./images/jellyFishBalloon2.png"; 
    
    }else if (jellyFish2.src.match("jellyFishBalloon2.png")) {
      jellyFish2.src = "./images/jellyFishBalloon3.png"; 
    
    } else {
      alert("Squishy Purps yells: 'You are my Hero!'");
  
    }
  }



