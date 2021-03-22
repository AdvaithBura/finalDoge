//Create variables here
var dog, database, foodS, dogImg, dog1Img, fedTime, getFoodButton, feedButton, gameS, bedImg, washImg, gardenImg, deadImg;
function preload(){
	//load images here
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happy dog.png");
  bedImg = loadImage("images/Bed Room.png");
  washImg = loadImage("images/Wash Room.png");
  gardenImg = loadImage("images/Garden.png");
  deadImg = loadImage("images/deadDog.png");
}

function setup() {
	createCanvas(800, 450);

  database = firebase.database();
  dog = createSprite(650,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  food1 = new Food();
  game1 = new GS();

  //Pet Naming
var petName = createInput("Enter pet name here");
petName.position(900,70);

//Button creation
//if(gameS === 0){
getFoodButton = createButton("Click to get more food");
getFoodButton.position(420,460);
feedButton = createButton("Click to feed Puppy");
feedButton.position(700,70);
//}
}


function draw() { 

game1.readGS();
var Switch = hour()-fedTime;

if(Switch === 0){
  game1.writeGS(1);
} else if(Switch >= 1 && Switch < 2){
  game1.writeGS(2);
} else if(Switch >= 2 && Switch < 3){
  game1.writeGS(3);
} else if(Switch >= 3 && Switch <4){
  game1.writeGS(4);
} else{
  game1.writeGS(1);
}





if(gameS === 1){
background(46,139,87);
dog.x = 650;

// space key mechanics
food1.readStock();
food1.readFeedTime();


//text
textSize(35);
fill("red");
text("Food Remaining: "+ foodS,300,430);


//milk picture
 for(var r = 0; r< foodS; r++){
  if(r<10){
  food1.display(r*50-20,70);
  }
}

for(q = 0; q<foodS; q++){
    if(q>9 && q<=20){
  food1.display(q*50-520,170)
}
}



//more food mechanics
getFoodButton.mousePressed(function(){
  if(foodS < 20){
  food1.moreStock(1);
  }
  dog.x = 650;
  dog.y = 200;
  dog.addImage(dogImg);
})


//feeding button pressed mechanics
feedButton.mousePressed(function(){
if(foodS > 0){
  food1.writeStock(1);

  if(foodS >= 11){
    dog.x = foodS*50-400;
    dog.y = 250;
    }
  
    if(foodS<= 10){
      dog.x = foodS*50+100;
      dog.y = 150;
    }

    dog.addImage(happyDog);
  }
})
} else if(gameS === 2){
  food1.garden();
  getFoodButton.hide();
  feedButton.hide();
  dog.x = 900;
} else if(gameS === 3){
food1.bathroom();
getFoodButton.hide();
feedButton.hide();
dog.x = 900;
} else if(gameS === 4){
  food1.bedroom();
  getFoodButton.hide();
  feedButton.hide();
  dog.x = 900;
}



textSize(35);
fill("red");
text("Food Remaining: "+ foodS,300,430);

//fedTime text
if(fedTime < 12 && fedTime > 0){
  text("Last fed: " + fedTime + " AM",20,40);
}
var theFoodTime = fedTime-12;
if(fedTime >12){
  text("Last fed: " + theFoodTime + " PM",20,40);
}
if(fedTime == 0){
  text("Last fed : 12 AM",20,40);
}
if(fedTime == 12){
  text("Last fed : 12 PM", 20,40);
}

drawSprites();
}









