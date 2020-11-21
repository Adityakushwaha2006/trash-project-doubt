var ball,tr1,tr2,tr3,ground,engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

tr1=new box(400,350,50,50,90);

Matter.Bodies.circle(150, 680, 50) ;



  
}


function draw() {
  background(0);

  Engine.update(engine);
tr1.display();




 
}



