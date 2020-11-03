const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1
var box2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

box1=new Box(302,200,20,40)
box2=new Box(300,300,20,20)
ground=new Ground(200,390,400,10)
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display()
    box2.display()
ground.display()
}


