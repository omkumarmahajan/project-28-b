const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Con = Matter.Constraint
var engine, world;
var ground
function setup() {
	createCanvas(800,800);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var options= {
	isStatic : true ,
   }
    ground = Bodies.rectangle(400,680,1500,7.0,options)
	World.add(world,ground)
	fill ("yellow")
	Engine.run(engine);
  
	paper1 = new paper(70,680,80,80)
	dustbinwall1 = new dustbin(600,570,170,200)

	c1 = new launcher (paper1.body,{x:100,y:100})
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("red");
 
 



rect(ground.position.x,ground.position.y,1500,20)

paper1.display();
 dustbinwall1.display();
c1.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}

function  mouseReleased()
{
	c1.fly ()
}