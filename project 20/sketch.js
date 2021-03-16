var BG;
var tom;
var jerry;
function preload() {
    //load the images here
    backgroundImg = loadImage("background.png");
    catRunning = loadAnimation("cat1.png,cat2.png,cat3.png");
    mouseRunning = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    BG = createSprite(300,200,600,600);
tom = createSprite(800,300,30,30);
jerry = createSprite(200,300,30,30);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x - jerry.x < jerry.width/2+tom.width/2
    && jerry.x - tom.x < jerry.width/2+tom.width/2
    && tom.y - jerry.y< jerry.height/2+tom.height/2
    && jerry.y - tom.y < jerry.height/2+tom.height/2){
    
   }
   else{
   
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX  = -5;
    tom.addAnimation("catRunning", catImg2);
tom.changeAnimation("catRunning");
}

}
