
const MyEngine = Matter.Engine;
const MyWorld = Matter.World;
const MyBodies = Matter.Bodies;
const MyBody = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(3000, 1100);

	engine = MyEngine.create();
	world = engine.world;
  
	//Create the Bodies Here.
	roof=new Ground(1500,150,2500,30);
  
  bob1=new Bob(300,450,50);
  bob2=new Bob(400,450,50);
  bob3=new Bob(500,450,50);
  bob4=new Bob(600,450,50);
  bob5=new Bob(700,450,50);
  bob6=new Bob(800,450,50);
  bob7=new Bob(900,450,50);
  bob8=new Bob(1000,450,50);
  bob9=new Bob(1100,450,50);
  bob10=new Bob(1200,450,50);
  bob11=new Bob(1300,450,50);
  bob12=new Bob(1400,450,50);
  bob13=new Bob(1500,450,50);
  bob14=new Bob(1600,450,50);
  bob15=new Bob(1700,450,50);
  bob16=new Bob(1800,450,50);
  bob17=new Bob(1900,450,50);
  bob18=new Bob(2000,450,50);
  bob19=new Bob(2100,450,50);
  bob20=new Bob(2200,450,50);
  bob21=new Bob(2300,450,50);
  bob22=new Bob(2400,450,50);
  bob23=new Bob(2500,450,50);
  bob24=new Bob(2600,450,50);
  bob25=new Bob(2700,450,50);


  rope1=new String(bob1.bob,{x : 300 , y : 150});
  rope2=new String(bob2.bob,{x : 400 , y : 150});
  rope3=new String(bob3.bob,{x : 500 , y : 150});
  rope4=new String(bob4.bob,{x : 600 , y : 150});
  rope5=new String(bob5.bob,{x : 700 , y : 150});
  rope6=new String(bob6.bob,{x : 800 , y : 150});
  rope7=new String(bob7.bob,{x : 900 , y : 150});
  rope8=new String(bob8.bob,{x : 1000 , y : 150});
  rope9=new String(bob9.bob,{x : 1100 , y : 150});
  rope10=new String(bob10.bob,{x : 1200 , y : 150});
  rope11=new String(bob11.bob,{x : 1300 , y : 150});
  rope12=new String(bob12.bob,{x : 1400 , y : 150});
  rope13=new String(bob13.bob,{x : 1500 , y : 150});
  rope14=new String(bob14.bob,{x : 1600 , y : 150});
  rope15=new String(bob15.bob,{x : 1700 , y : 150});
  rope16=new String(bob16.bob,{x : 1800 , y : 150});
  rope17=new String(bob17.bob,{x : 1900 , y : 150});
  rope18=new String(bob18.bob,{x : 2000 , y : 150});
  rope19=new String(bob19.bob,{x : 2100 , y : 150});
  rope20=new String(bob20.bob,{x : 2200 , y : 150});
  rope21=new String(bob21.bob,{x : 2300 , y : 150});
  rope22=new String(bob22.bob,{x : 2400 , y : 150});
  rope23=new String(bob23.bob,{x : 2500 , y : 150});
  rope24=new String(bob24.bob,{x : 2600 , y : 150});
  rope25=new String(bob25.bob,{x : 2700 , y : 150});

}


function draw() {
  rectMode(CENTER);
  MyEngine.update(engine);
  background(0);
  

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();
  rope10.display();
  rope11.display();
  rope12.display();
  rope13.display();
  rope14.display();
  rope15.display();
  rope16.display();
  rope17.display();
  rope18.display();
  rope19.display();
  rope20.display();
  rope21.display();
  rope22.display();
  rope23.display();
  rope24.display();
  rope25.display();
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
  bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();
  bob10.display(); 
  bob11.display();
  bob12.display();
  bob13.display();
  bob14.display();
  bob15.display();
  bob16.display();
  bob17.display();
  bob18.display();
  bob19.display();
  bob20.display();
  bob21.display();
  bob22.display();
  bob23.display();
  bob24.display();
  bob25.display();

  fill("white");
  textSize(60);
  text("Whenever you press SPACE first pendulum will move.",800,750)
  
  KeyPressed();

  drawSprites();
}
function KeyPressed(){
  if (keyWentDown("SPACE")){
    var message = 1;
    console.log(message);
    Matter.Body.applyForce(bob1.bob,bob1.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob2.bob,bob2.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob3.bob,bob3.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob4.bob,bob4.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob5.bob,bob5.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob6.bob,bob6.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob7.bob,bob7.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob8.bob,bob8.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob9.bob,bob9.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob10.bob,bob10.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob11.bob,bob11.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob12.bob,bob12.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob13.bob,bob13.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob14.bob,bob14.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob15.bob,bob15.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob16.bob,bob16.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob17.bob,bob17.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob18.bob,bob18.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob19.bob,bob19.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob20.bob,bob20.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob21.bob,bob21.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob22.bob,bob22.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob23.bob,bob23.bob.position,{x : -400 , y : -400});
    Matter.Body.applyForce(bob24.bob,bob24.bob.position,{x : -400 , y : -400});
    

  }
}