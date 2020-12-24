const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,box1,box2,box3,box4,box5,box6,box8,box9,box10,box11,box12,box13,box14
,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,constraint1,polygon1,ground1,ground2,ground3;

var score = 0;
function preload(){
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground1 = new Ground(390,300,200,5);
    ground2 = new Ground(790,200,200,5);
    ground3 = new Ground(650,780,700,5);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    box16 = new Box(390,155,30,40);

    box17 = new Box1(730,175,30,40);
    box18 = new Box1(760,175,30,40);
    box19 = new Box1(790,175,30,40);
    box20 = new Box1(820,175,30,40);
    box21 = new Box1(850,175,30,40);

    box22 = new Box1(760,135,30,40);
    box23 = new Box1(790,135,30,40);
    box24 = new Box1(820,135,30,40);

    box25 = new Box1(790,95,30,40);

    polygon1 = new Polygon(100,200,50,50);

    constraint1 = new Slingshot(polygon1.body,{x:150,y:150});
	
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  stroke("white")
  fill("white")
  textSize(15);
  text("Score : "+score,750,40);

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  constraint1.display();
  polygon1.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
}

function mouseDragged (){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constraint1.fly();
}

function keyPressed (){
if(keyCode===32){
    constraint1.attach(this.polygon1);
}

}