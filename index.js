const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// const express = require("express");
// const app = express();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
let hue = 0;

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
window.addEventListener("touchmove", (e)=>{
    console.log(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
    mouse.x = e.changedTouches[0].clientX;
    mouse.y = e.changedTouches[0].clientY;
    for(let i = 0; i< 50; i++){
        particles.push(new Particle)
     }
});
window.addEventListener("mousemove", (e)=>{
    mouse.x = e.x;
    mouse.y = e.y
    for(let i = 0; i< 2; i++){
       particles.push(new Particle)
    }
})
window.addEventListener('click', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y
    for(let i = 0; i< 50; i++){
       particles.push(new Particle)
    }
})
class Particle{
    constructor(){
        // this.x  = Math.random()*canvas.width;
        // this.y  = Math.random()*canvas.height;
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = Math.random()* 10 +1;
        this.speedX = Math.random()* 3 - 1.5;
        this.speedY = Math.random()*3-1.5;
        this.color = 'hsl('+hue+', 100%, 50%)'
        
    }
    update(){
        this.x += this.speedX;
        this.y+= this.speedY;
        if(this.radius>0.3)this.radius-=0.1;
    }
    draw(){
        drawArc(this.x, this.y, this.radius, this.color);//
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
        for(let j = i; j<particles.length; j++){
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx*dx+dy*dy);
            if (distance < 100){
                ctx.beginPath();
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = particles[i].color;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y)
                ctx.stroke();
            }
         
        }
        if(particles[i].radius<=0.3){
            particles.splice(i, 1);
            i--;
        }
    }
}
// init();
// console.log(particles);
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawArc(mouse.x, mouse.y, 15, "white");

    // console.log(hue);
    // drawRectangle(0,0, canvas.width,canvas.height, "rgba(0, 0, 0, 0.03)")
    newParticle();
    hue++ * 2;
    requestAnimationFrame(animate);
}
// init();
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

function drawLine(x1, y1, x2, y2, width, color){
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();
};
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 192.168;
// }

// app.listen(port, function(){
//   console.log("Server Started");
// });
// app.get("/", function(req, res){
//     res.sendFile(__dirname +"/test.html")
// })