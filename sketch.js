var chao,player;
var chaoImg,playerImg;

function preload(){
 
  playerImg = loadAnimation("Runner-1.png")
  playerImg = loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png")
  
  chaoImg = loadImage("path.png")
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  background("black");
 
  //crie sprite aqui
  chao=createSprite(200,200);
  chao.addImage(chaoImg);
  chao.velocityY = -5;
  chao.scale=0.3;


  player = createSprite(200,200,30,30);
  player.scale =0.25;
}

function draw() {
  background(0);
  player.x = mouseX
 
 
  if(chao.y < 0){
    chao.y = sea.width/8;
  }
  drawSprites()
}
