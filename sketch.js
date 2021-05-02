
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,dustbin2,dustbin3,ground1
function preload()
{
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;


	//dustbin2 = new ground(750,250,15,80);

	//dustbin3 = new ground(830,250,15,80);
  
	paper1 = new paper(35,0,30,30);
  
	ground1 = new ground(500,295,1000,15);
  
	sup_object = new dustbin(790,235,5,5)
  
	
   
	
	
  
	Engine.run(engine);
	
	
  }
  
  
  function draw() {
	ellipseMode(CENTER);
	rectMode(CENTER);
	background(255);
	
  
	
  
	ground1.display();
	
   
  
	//dustbin2.display();
  
	//dustbin3.display();
  
	paper1.display();
  
	sup_object.display();
  }
  
  
  
  function keyPressed() {
	  if (keyCode === UP_ARROW) {
  
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:178,y:-170});
	
	  }
  }