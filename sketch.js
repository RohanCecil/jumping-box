const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, block1,block2,block3,block4;

function setup(){
    var canvas = createCanvas(400,400);

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = rgb(225,225,225);
    ball.velocityX=0;
    ball.velocityY=3;

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "Blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(100,580,100,30);
    block3.shapeColor = "green";

    block4 = createSprite(350,580,200,30);
    block4.shapeColor = "yellow";

    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,300,50,50);
}

function draw(){
    background(0);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        Music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        Music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        Music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        Music.play();
    }

    Engine.update(engine);
    ball.display();
   
}