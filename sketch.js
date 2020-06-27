var player, playerimg,playerimgatt, zombhea=100,zombimg,zombie,fireimg,fireball, cooldown = 0, coolin;
function preload() {
    playerimg=loadImage("ninja2.png");
    playerimgatt=loadImage("ninja.png");
    backgroundimg=loadImage("l.jpg");
    zombimg=loadImage("unnamed1.png");
    fireimg=loadImage("download3.png");
}
function setup() {
    
    createCanvas(displayWidth,displayHeight-200);
    player = createSprite(200,670,200,200);
    player.addImage(playerimg);
    player.scale=1/2;
}
function draw() {
    coolin=cooldown;
    cooldown=cooldown+0.05;
    background(backgroundimg);
    if (cooldown>100 && cooldown<150) {
       text("cooldown Ready",200,200);
    }
    if (keyDown("space")) {
      player.addImage(playerimgatt);
      player.x=300
      zombhea=zombhea-10;
    }
    if (keyDown("e") && cooldown>=100) {
      cooldown=0;
      player.addImage(playerimgatt);
      player.x=300
      zombhea=zombhea-30;
      fireball = createSprite(player.x,player.y,10,10);
      fireball.addImage(fireimg);
      fireball.velocityX=5;
    }
    if (keyWentUp("e")) { 
        player.addImage(playerimg);
        player.x=200
    }
    if (keyWentUp("space")) {
        player.addImage(playerimg);
        player.x=200
    }
    text("coolin: "+Math.round(coolin),100,100);
    drawSprites();
}