var car, carimg;
var trackimg;

function preload() {
  carimg = loadImage("car1.png");
  trackimg = loadImage("track.jpg");
}
function setup() {
  createCanvas(750,800);
  car = createSprite(250, 700);
  car.addImage(carimg);
}

function draw() {
  background(0);
  image(trackimg, 0, -7000, 0, 0);


  if(keyDown("left")) {
    car.x-=10;
  }
  
   if(keyDown("right")) {
     car.x+=10;
   }

   if (keyDown("up")) {
    car.y-=10;
   }

   camera.position.y = car.y;

  drawSprites();
}