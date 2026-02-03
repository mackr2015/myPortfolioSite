let canvas = document.getElementById('canvasBg'),
    context = canvas.getContext('2d'),
    heroSection = document.querySelector('.hero-section');

let canvasWidth, canvasHeight;
let circleArray = [];
let ready = false; // flag to indicate circles are ready

// Circle class
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = randomColor();
    }

    draw() {
        drawCircle(this.x, this.y, this.radius, this.color);
    }

    update() {
        // Bounce off walls
        if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// Initialize all circles
function init() {
    circleArray = [];
    for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 10 + 1;
        let x = Math.random() * (canvasWidth - radius * 2) + radius;
        let y = Math.random() * (canvasHeight - radius * 2) + radius;
        let dx = (Math.random() * 0.5) * 5;
        let dy = (Math.random() * 0.5) * 5;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    ready = true; // animation can start
}

// Resize canvas based on window
function resizeBg() {
    let bodyWidth = document.body.offsetWidth;
    canvas.width = bodyWidth;

    if (window.innerWidth > 1600) {
        canvas.height = 650;
        heroSection.style.height = '650px';
    } else if (window.innerWidth > 768) {
        canvas.height = 600;
        heroSection.style.height = '600px';
    } else {
        canvas.height = 650;
        heroSection.style.height = '650px';
    }

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (!ready) return; // skip until circles are ready

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    circleArray.forEach(circle => circle.update());
}

// Drawing utilities
function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
}

// Random helpers
function randomColor() {
    let red = [71,15,20,251,30,35,251,40,10];
    let green = [207,97,244,105,115,244,125,130,145];
    let blue = [119,120,241,135,155,85,168,175];
    let opacity = [0.4,0.5,0.7,0.6,0.8,0.9];

    return `rgba(${red[Math.floor(Math.random() * red.length)]},${green[Math.floor(Math.random() * green.length)]},${blue[Math.floor(Math.random() * blue.length)]},${opacity[Math.floor(Math.random() * opacity.length)]})`;
}


// Vanilla JS fade out
function fadeOutLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    // Start fade
    loader.style.opacity = '0';

    // After transition, hide element completely
    loader.addEventListener('transitionend', () => {
        loader.style.display = 'none';
    }, { once: true });
}

// On window load
window.onload = function() {
    resizeBg();
    init();
    fadeOutLoader();
    animate();
}

// On window resize
window.addEventListener('resize', function() {
    resizeBg();
    init(); // re-initialize circles to fit new size
});
