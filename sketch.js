var gun , gunImg ;
var zombie , zombieImg;
var backgroundImage;
var canvas;
var bullet , bulletImg;
var zombie1 , zombie2 , zombie3 , zombie4 , zombie5;
var zombie1Img , zombie2Img, zombie3Img , zombie4Img , zombie5Img;

function preload()
{
  gunImg = loadImage("images/gun.png.png")
  zombie1Img = loadImage("images/zombie.png.png")
  zombie2Img = loadImage("images/zombie1.jpg")
  zombie3Img = loadImage("images/zombie2.png")
  zombie5Img = loadImage("images/zombie-5.png")
  //backgroundImg = loadImage("images/jungle.png.jpg") 
  bulletImg = loadImage("images/bullet-3.png")
  backgroundImage = loadImage("images/jungle.png.jpg")
}
function setup()
{
canvas = createCanvas(1500,600);
scene = createSprite(0,0,1500,600);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
//background1 = createSprite(500,200,9300,900);
//background1.addImage(backgroundImg);

  gun = createSprite(280,320,20,50); 
  gun.addImage(gunImg);
  gun.scale = 0.7;

 // bullet = createSprite(390,320,20,50);
 // bullet.addImage(bulletImg);
 // bullet.scale = 0.1;
  bulletsGroup = new Group();
}
 function draw()
 {
  background(0);
  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  

//moving gun
gun.y = World.mouseY

 // release bullet when space key is pressed
 if (keyDown("space")) {
  createBullets();                 
  
}

  

  var select_zombie = Math.round(random(2,0));
  if(World.frameCount%60===0)
  {
    if(select_zombie===1)
    {
      displayZombie1();
    }
    if(select_zombie===2)
    {
      displayZombie2();
    }
    if(select_zombie===3)
    {
      displayZombie3();
    }
    if(select_zombie===5)
    {
      displayZombie5();
    }
    
  } 
  drawSprites();
}
  
 function displayZombie1()
 {
   var z1 = createSprite(1000,Math.round(random(20,370)),20,20);
   z1.addImage(zombie1Img);
   z1.velocityX = -3;
   z1.lifetime = 300;
   z1.scale = 0.2;
 }
 function displayZombie2()
 {
  var z2 = createSprite(1000,Math.round(random(20,370)),20,20);
   z2.addImage(zombie2Img);
   z2.velocityX = -3;
   z2.lifetime = 300;
   z2.scale = 0.2;
 }
 function displayZombie3()
 {
   var z3 = createSprite(1000,Math.round(random(20,370)),20,20);
   z3.addImage(zombie3Img);
   z3.velocityX = -3;
   z3.lifetime = 300;
   z3.scale = 0.2;

  }
  function displayZombie5()
  {
    var z5 = createSprite(1000,Math.round(random(20,370)),20,20);
    z5.addImage(zombie5Img);
    z5.velocityX = -3;
    z5.lifetime = 300;
    z5.scale = 0.2;
   
 }
 // Creating bullets for gun
 function createBullets() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = 360;
  bullet.y=gun.y;
  bullet.velocityX = 4;
  bullet.lifetime = 100;
  bullet.scale = 0.1;
  bulletsGroup.add(bullet);
   
}

