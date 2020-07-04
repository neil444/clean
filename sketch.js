var paper_object,gr;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	paper_object = new paper(200,200,20);
	db1 = new Db (1200,620,20,200)
	db2 = new Db (1300,620,20,200)

      
    gr = createSprite(50,180,20,50);
	gr = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, gr);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  paper_object.display();
 db1.display()
 db2.display()

  drawSprites();
 
}
function keyPressed(){ 
	if(keyCode === UP_ARROW)
	{ Matter.Body.applyForce(paper_object.body,paper_object.body.position,
		 {x:100,y:-85}); }
 }


