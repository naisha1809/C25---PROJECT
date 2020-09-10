
var image1,rect1,rect2,rect3;
var dustImg;
var ground;
var paper1;
var engine,world;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustImg = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	image1= createSprite(555,435,10,100);
	image1.addImage(dustImg);
	image1.scale = 0.5;

	ground = new Ground(400,500,800,20);

	
	rect1 = new Dustbin(495,435,5,150);
	//rect2 = new Dustbin(635,475,180,20);
	rect3 = new Dustbin(605,435,5,150);

	paper1= new Paper(200,400,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  
 // image1.display();
  rect1.display();
  //rect2.display();
  rect3.display();
 
  paper1.display();


  
  drawSprites();

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-30})
	   
	 }
	 
   }



