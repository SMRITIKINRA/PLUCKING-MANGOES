const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var stone;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    stone = new Stone(230,410,20)
	mango1=new mango(1100,100,30);
	mango2=new mango(1000,50,30);
	mango3=new mango(1020,150,30);
	mango4=new mango(1050,200,30);
	mango5=new mango(1080,220,30);
	mango6=new mango(950,300,30);
	mango7=new mango(1150,170,30);
	mango8=new mango(1200,120,30);
	mango9=new mango(900,210,30);
  mango10=new mango(1300,450,30);
  
  sling = new Slingshot(stone.body,{x:200,y:200});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  treeObj.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body ,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.Position;
stoneBodyPosition = lstone.body.Position;

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y ,mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.Body,false);
}
}

function keyPressed(){
  if(keyCode ===UP_ARROW){
    Matter.body.setPosition(stone.body ,{x:235 , y:420});
    launcherObject.attach(stone.body);
  }
}