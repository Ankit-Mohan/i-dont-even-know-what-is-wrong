const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;
function preload(){
    lightim1 = loadImage("3.png");
}

function setup(){
var canvas = createCanvas(400,400);   
engine = Engine.create();
world = engine.world; 
rain1 = new rain(100,1);

}

function draw(){
 background("Black");
 rain1.display();
if (frameCount%45===0){
lightning = createSprite(100,100,100,100);
lightning.addImage(lightim1);
lightning.scale = 0.5;

}
rain1.drops();
 drawSprites();
 Engine.update(engine);
}   
