const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
// console.log(canvas.width, canvas.height);
ctx.fillStyle = '#E1578A';
ctx.fillRect(0,0,canvas.width, canvas.height);

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#E1578A';
    ctx.fillRect(0,0,canvas.width, canvas.height);
})
let mouse = {
    x:undefined,
    y:undefined
}
canvas.addEventListener("mousemove", (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
})

class Particle{
    constructor(){
        this.x  = Math.random()*canvas.width;
        this.y  = Math.random()*canvas.height;
        this.radius = Math.random()* 20 +1;
        this.speedX = Math.random()* 3 - 1.5;
        this.speedY = Math.random()*3-1.5;
    }
    update(){
        this.x += this.speedX;
        this.y+= this.speedY;
    }
    draw(){
        drawArc(this.x, this.y, this.radius, "white");
    }
}

function init(){
    for(let i = 0; i < 300; i++){
        particles.push(new Particle());
    }
}
function newParticle(){
    for(let i = 0; i<particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
}
init();
console.log(particles);
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawArc(mouse.x, mouse.y, 15, "white");
    newParticle();
    requestAnimationFrame(animate);
}
animate();













 function drawArc(x , y , radius, color){
    ctx.fillStyle = color;
    ctx.beginPath(); 
    ctx.arc(x, y, radius, 0, Math.PI*2,);//(x, y, radius, start angle, end angle)
    ctx.fill();
}








function drawRectangle(x, y, width, height, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);//(x, y, width, height)
}