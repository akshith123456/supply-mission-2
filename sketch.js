var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left , right , bottom;
var leftbody, rightbody , bottombody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	leftSprite=createSprite(width/2-100, 610, 20, 100);
	leftSprite.shapeColor="red"

	rightSprite=createSprite(width/2+200, 610, 20, 100);
	rightSprite.shapeColor="red"

	//bottomSprite=createSprite(width/2+40, 650, 300, 18);
	//bottomSprite.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	leftbody=Bodies.rectangle(width/2-100, 610, 20, 100,{isStatic:true});
	World.add(world, leftbody);
	
	rightbody=Bodies.rectangle(width/2+200, 610, 20, 100, {isStatic:true});
	World.add(world, rightbody);

	bottombody=Bodies.rectangle(width/2+40, 650, 300, 18, {isStatic:true});
	World.add(world, bottombody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  rect(bottombody.position.x, bottombody.position.y, 300, 18)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)


    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
if (keyCode === LEFT_ARROW)  
{
   helicopterSprite.x=helicopterSprite.x-20
   Matter.Body.translate(packageBody,{x:-20,y:0})
}
if (keyCode === RIGHT_ARROW)
{
   helicopterSprite.x=helicopterSprite.x+20
   Matter.Body.translate(packageBody,{x:20,y:0})
}

}



