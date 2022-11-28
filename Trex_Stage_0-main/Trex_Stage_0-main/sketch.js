
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 150, 20, 50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

ground = createSprite(300, 190, 600, 10)

}

function draw(){
  background("white")
  if(keyDown("w")){
    trex.velocityY = -5
  }
  trex.velocityY = trex.velocityY + 0.5
drawSprites()  
trex.collide(ground)
}
