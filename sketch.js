const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;
var backGround, backgroundImg;
function preload(){
backgroundImg=loadImage("starry_night.jpg");
}
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var backGround_options={
    isStatic:true
  }
  background=Bodies.rectangle(200,200,400,400,backGround_options);
  World.add(world,backGround);
  console.log(backGround);

  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() {
  //background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(backGround.position.x,backGround.position.y,400,400);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}