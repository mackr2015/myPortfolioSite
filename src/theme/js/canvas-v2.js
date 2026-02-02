let canvas = document.getElementById('canvasBg'),
    context = canvas.getContext('2d'),
    heroSection = document.querySelector('.hero-section'),
    canvasWidth,canvasHeight;

// console.log(circle.x);
window.onload = function() {
  // randomNumb();
  // make canvas 100% even if window resize

  canvasWidth = canvas.width;
  canvasHeight = canvas.height;

}


// get random x and y position, get random speedX and speedY
let circle = {
    x: 100,
    y: 100,
    radius: randomRadius(),
    dx: (Math.random() * 0.5) * 15,
    dy: (Math.random() * 0.5) * 12,
    color: 'blue'
    }

// Object Circle
function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = randomColor();

  //method draw
  this.draw = function() {
    // console.log('draw method fired!');
    // drawCircle(x, y, 12, circle.color);
    drawCircle(this.x, this.y, this.radius, this.color);
  }

  this.update = function() {
    // drawCircle(circle.x, circle.y, circle.radius, circle.color);
    // bounce from left side or right side
    if(this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if(this.y + this.radius > canvasHeight || this.y - this.radius < 0){
      // circle.speedY = -circle.speedY;
      this.dy = -this.dy;
    }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }


}

let circleArray = [];

function init(){
  circleArray = [];

  for(let i = 0; i < 100; i++){
    // let x =  radomXY(),
        radius = Math.random() * 10 + 1,
        x = Math.random() * (window.innerWidth - radius * 2 ) + radius,
        y = Math.random() * (window.innerHeight - radius * 2) + radius,
        dx = (Math.random() * 0.5) * 5,
        dy = (Math.random() * 0.5) * 5;
        // color = randomColor();
    
    circleArray.push( new Circle(x,y,dx,dy,radius) );

  }
}


// on resize run the resize function
window.addEventListener('resize', function(){

resizeBg();

});



/*
* Main function for animation
*/
function animate() {
  requestAnimationFrame(animate);

  context.clearRect(0, 0, canvasWidth, canvasHeight); // clear canvas each time new circle is drawn
  // drawCircle(circle.x, circle.y, circle.radius, circle.color);

  for(let j = 0; j < circleArray.length; j++ ) {
    circleArray[j].update();
    // console.log(circleArray[j]);
  }


}

resizeBg();
animate();
init();




function resizeBg() {

  // console.log(heroSection.style.innerHeight);
  let myBody = document.querySelector('body');
  myBody = myBody.offsetWidth;
  canvas.width = myBody;
  // canvas.height = window.innerHeight;
  if( window.innerWidth > 1600 ) {
    canvas.height = 650;
    heroSection.style.height = '650px';
  }
  else if(window.innerWidth > 768 && window.innerWidth < 1599 ) {
    canvas.height = 600;
    heroSection.style.height = '600px';
  }
  else if(window.innerWidth < 768 ) {
    canvas.height = 650;
    heroSection.style.height = '650px';
  }

  // console.log(canvas.width);
}


/*
* Init Drawings
*/
// initDraw();

// function initDraw() {
//   // draw backgroun black
//   // drawRect(0, 0, canvas.width, canvas.height, 'black');
//   // drawing the circle center of the screen
//   drawCircle( 50, 50, 10, 'blue');
// }

// template for drawing rect element
function drawRect(leftX, topY, width, height, drawColor){
  context.fillStyle = drawColor;
  // values are as follows left, top, canvas width and canvas height
  context.fillRect( leftX, topY, width, height);
}

// template for drawing Circle element
function drawCircle(centerX, centerY, radius, circleColor){
  // drawing the circle center of the screen
  //colorRect(circleX , (canvasHeight /2) - 7.5, 15,  10, 'red');
  context.fillStyle = circleColor;
  context.beginPath();
  // x, y , radius, angle , radiance
  context.arc( centerX , centerY, radius, 0, Math.PI*2, true);
  context.fill();
}


function randomRadius(){
  let numbers = [2,3,4,1];
  let random = numbers[Math.floor(Math.random() * numbers.length)];
  return random;
}
function randomColor(){
  let red = [71,15,20,251,30,35,251,40,10,];
  let green = [207,97,244,105,115,244,125,130,145];
  let blue = [119,120,241,135,155,85,168,175];
  let opacity = [0.4,0.5,0.7,0.6,0.8,0.9];
  // let opacity = [1,1,1,1];
  let random = 'rgb('+red[Math.floor(Math.random() * red.length)] +','+ green[Math.floor(Math.random() * green.length)]+ ',' + blue[Math.floor(Math.random() * blue.length)]+ ','+ opacity[Math.floor(Math.random() * opacity.length)]+  ')';
  return random;
}




