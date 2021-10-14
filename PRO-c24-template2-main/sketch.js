const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone, bouncyBall, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone =  new Stone(700, 320, 100, 100);
    bouncyBall = new BouncyBall(900, 450, 70);
    iron = new Iron(300, 350);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    bouncyBall.display();
    stone.display();
    
 
}