
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2,mango3,mango4,mango5,mango6;
var stone;
var world,boy;
var sling;
var gameState = "Play"

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,250,30);
	mango2=new mango(1140,90,30);
	mango3=new mango(1000,120,30);
	mango4=new mango(950,190,30);
	mango5=new mango(1220,195,30);
	mango6 = new mango(1075,185,30)
	stone = new Stone(225,400,30,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	sling = new SlingShot(stone.body,{x:225, y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  text ("Press space to get one more chance!",200,150)
  image(boy ,200,340,200,300);

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();

  groundObject.display();
}

function mouseDragged(){
    if(gameState === "Play"){
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
    

}


function mouseReleased(){
    sling.fly();
    gamestate = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(stone.body);
    }
}
