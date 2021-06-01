var iss,spacecraft;
var iImage,sImage,back
 var hasDocked = false;
function preload(){
  back = loadImage("spacebg.jpg")
  iImage = loadImage("iss.png")
  sImage1 = loadImage("spacecraft1.png")
  sImage2 = loadImage("spacecraft2.png")
  sImage3 = loadImage("spacecraft3.png")
  sImage4 = loadImage("spacecraft4.png")
  ai1 = loadImage("a1.png")
  ai2 = loadImage("a2.png")
  ai3 = loadImage("a3.png")
  s = loadImage("star.png")


  
}

function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 200, 50, 50);
 iss.addImage(iImage)
 iss.scale=0.78


 space = createSprite(360, 350, 50, 50);
 space.addImage(sImage1)
 space.scale=0.2

 a1 = createSprite(200, 350, 50, 50);
 a1.addImage(ai1)
 a1.scale=0.3

 a2 = createSprite(100,100, 50, 50);
 a2.addImage(ai2)
 a2.scale=0.3

 a3 = createSprite(700, 250, 50, 50);
 a3.addImage(ai3)
 a3.scale=0.5

 star = createSprite(700, 100, 50, 50);
 star.addImage(s)
 star.scale=0.18

 star = createSprite(20, 40, 50, 50);
 star.addImage(s)
 star.scale=0.18

 star = createSprite(392, 26, 50, 50);
 star.addImage(s)
 star.scale=0.18

 
}

function draw() {
  background(back);
  space.debug = false;
  iss.debug = false;
  
  iss.setCollider("rectangle",-70,30,50,30)
  space.setCollider("rectangle",0,-35,500,300)
  
  if(!hasDocked){
    
    if(keyCode===37){
      space.x = space.x-1;
      space.addImage(sImage3)
    }
    if(keyCode===39){
      space.x = space.x+1;
      space.addImage(sImage4)
    }
    if(keyCode===38){
      space.y = space.y-1;
      space.addImage(sImage1)
    }
    if(keyCode===40){
      space.addImage(sImage2)
    }
    if(space.isTouching(iss)){
      fill("green")
      textSize(30)
      text("Docking succesfully",250,350)
    }
  }
  drawSprites();
  console.log(mouseX,mouseY)
}