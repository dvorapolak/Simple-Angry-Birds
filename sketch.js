const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var piggy
var logs
var box3
var box4
var piggie
var log2
var box6
var log3
var log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(920,200,70,70);
    box4 = new Box(700,200,70,70);

    ground = new Ground(600,height,1200,20)
    pig = new Pig(810,350);
    logs = new Log(810,260,300,PI/2);
    piggie = new Pig(810,200)
    log2 = new Log(810,170,300,PI/2);
    box6 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7)


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    logs.display();
    box3.display();
    box4.display();
    piggie.display();
    log2.display();
    box6.display();
    log3.display();
    log4.display();
}