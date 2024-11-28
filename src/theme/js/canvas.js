// https://www.youtube.com/watch?v=yq2au9EfeRQ&t=918s
let canvas = document.getElementById('canvasBg'),
		context = canvas.getContext('2d'),
		heroSection = document.querySelector('.hero-section'),
		canvasWidth,canvasHeight;

// console.log(circle.x);
window.onload = function() {
	// randomNumb();
	// make canvas 100% even if window resize
	resizeBg();

	canvasWidth = canvas.width;
	canvasHeight = canvas.height;


	animate();

}



// get random x and y position, get random speedX and speedY
let circle = {
		x: randomNumb(),
		y: randomNumb(),
		radius: 20,
		speedX: (Math.random() * 0.5) * 15,
		speedY: (Math.random() * 0.5) * 12,
		color: 'blue'
		}

// Object Circle
function Circle(x, y){
	this.x = x;
	this.y = y;

	//method draw
	this.draw = function() {

	}

	this.update = function() {

	}
}

// console.log(circle.x);
// console.log(circle.y);
// on resize run the resize function
window.addEventListener('resize', resizeBg, false);

/*
* Main function for animation
*/
function animate() {
	requestAnimationFrame(animate);

	context.clearRect(0, 0, canvasWidth, canvasHeight); // clear canvas each time new circle is drawn
	drawCircle(circle.x, circle.y, circle.radius, circle.color);
	// drawCircle(circle.x, circle.y, circle.radius, circle.color);
	// bounce from left side or right side
	if(circle.x + circle.radius > canvasWidth || circle.x - circle.radius < 0) {
		circle.speedX = -circle.speedX;
	}

	// if(circle.y + circle.radius < canvasHeight || circle.y - circle.radius < 0) {
	// 	circle.speedY = -circle.speedY;
	// }
	if(circle.y + circle.radius > canvasHeight || circle.y - circle.radius < 0){
		// circle.speedY = -circle.speedY;
		circle.speedY = -circle.speedY;
	}

	circle.x += circle.speedX;
	circle.y += circle.speedY;

}



function circleReset(){
		circleSpeedX = -circleSpeedX;
		// circleSpeedX = -circleSpeedX - (Math.floor(Math.random() * 2) + 1);

		circleX = canvasWidth / 2;
		circleY = canvasHeight / 2;
	}



function resizeBg() {

	// console.log(heroSection.style.innerHeight);
	let myBody = document.querySelector('body');
	myBody = myBody.offsetWidth;
	canvas.width = myBody;
	// canvas.height = window.innerHeight;
	if( window.innerWidth > 1600 ) {
		canvas.height = 940;
		heroSection.style.height = '940px';
	}
	else if(window.innerWidth > 768 && window.innerWidth < 1599 ) {
		canvas.height = 600;
		heroSection.style.height = '600px';
	}
	else if(window.innerWidth < 768 ) {
		canvas.height = 400;
		heroSection.style.height = '400px';
	}

	// console.log(canvas.width);
}


/*
*	Init Drawings
*/
// initDraw();

function initDraw() {
	// draw backgroun black
	// drawRect(0, 0, canvas.width, canvas.height, 'black');
	// drawing the circle center of the screen
	drawCircle( 50, 50, 10, 'blue');
}

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

function randomNumb(){
	let numbers = [180,222,350,100,280,305,50,60,20];
	let randomVal = numbers[Math.floor(Math.random() * numbers.length)];
	return randomVal;
}




