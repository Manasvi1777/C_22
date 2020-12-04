const Engine=Matter.Engine;  //namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var object,engine,world,ball;

var ground_options={
                     isStatic:true
                   }

var ball_options={
                    restitution:0.8
                  }

function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //world is created by default
  world=engine.world;

  object=Bodies.rectangle(200,400,390,20,ground_options);
  World.add(world,object);

  ball=Bodies.circle(200,20,20,ball_options);
  World.add(world,ball);


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}