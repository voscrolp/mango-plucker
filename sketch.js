
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var kid, tree;
var rock, string;
var mango1,mango2,mango3,mango4;

function preload(){
	kid = loadImage('images/kid.png');
	tree = loadImage('images/mango tree.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,70);
	rock = new Rock(160,570,30);
	string = new Rope(rock.body,{x:160,y:570});

	mango1 = new Mango(350,350);
	mango2 = new Mango(475,250);
	mango3 = new Mango(525,400);
	mango4 = new Mango(700,300);

	//Engine.run(engine);
  
}


function draw() {
  
  background(135, 206, 235);
  Engine.update(engine);
  imageMode(CENTER);
  image(kid,200,600,kid.width/13,kid.height/13);
  image(tree,500,450);

  ground.display();
  rock.display();
  string.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  collide1(rock.body,mango1.body);
  collide2(rock.body,mango2.body);
  collide3(rock.body,mango3.body);
  collide4(rock.body,mango4.body);

  
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body,{x:160,y:570});
		string.attach();
	}
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
	string.fly();
}

function collide1(body1,body2){
	var line1 = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
	console.log(line1);
	if(line1 <= 30 + 50 + 5){
		Matter.Body.setStatic(body2,false);
		console.log("hello");
	}
}

function collide2(body1,body2){
	var line2 = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
	if(line2 <= 30 + 50 + 5){
		Matter.Body.setStatic(body2,false);
		console.log("hello");
	}
}

function collide3(body1,body2){
	var line3 = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
	if(line3 <= 30 + 50 + 5){
		Matter.Body.setStatic(body2,false);
		console.log("hello");
	}
}

function collide4(body1,body2){
	var line4 = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
	if(line4 <= 30 + 50 + 5){
		Matter.Body.setStatic(body2,false);
		console.log("hello");
	}
}






