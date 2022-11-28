  
var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var gameState = "play"
var score;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  ghostImg = loadImage("ghost-standing.png");
}

function setup() {
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 5;
  
  doorsGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  score = 0;
}


function draw() {
  background(255);
 if(tower.y > 400){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    score = score + Math.round(getFrameRate()/60);

    if(keyDown("LEFT_ARROW")){
        ghost.x = ghost.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("RIGHT_ARROW")){
  
          ghost.x = ghost.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("ENTER")){
  
         ghost.velocityY = -10;

      // escreva o código para mover para cima quando a tecla enter for pressionada
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    if (tower.y > 400){
      tower.y = 300;
    }

      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     
    if(doorsGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
if (gameState === "end"){
  background("black")
  stroke("yellow");
  fill("yellow");
  textSize(80);
  text("Game Over😭", 50,250)
  textSize(30);
  text("Pontuação: "+ score, 200,50);
}
  
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 100 === 0) {
    var door = createSprite(200, -50);
    //adicione a função aleatória
    door.x=Math.round(random(120,400))
  

    door.addImage(doorImg);
    
    door.velocityY = 5;

    //mude a profundidade do fantasma e da porta
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

    door.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
  }
}

