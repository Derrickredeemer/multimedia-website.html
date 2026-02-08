/* BACKEND URL (for subscriptions) */
const BACKEND_URL = "https://YOUR-BACKEND-URL.replit.app";

/* ====== Welcome Text & Greeting ====== */
const welcome = document.getElementById("welcome-msg");
let pos = 0, dir = 1;

// Greeting based on visitor's time
function updateGreeting(){
  const hour = new Date().getHours();
  let greet = "Welcome!";
  if(hour < 12) greet = "Good morning!";
  else if(hour < 18) greet = "Good afternoon!";
  else greet = "Good evening!";
  welcome.textContent = `${greet} Welcome to A.D Derrick Redeemer’s Portfolio`;
}
updateGreeting();

// Move text horizontally
function moveText(){
  pos += dir * 1.5;
  if(pos > window.innerWidth - 300 || pos < 0) dir *= -1;
  welcome.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(moveText);
}
moveText();

/* ====== Dynamic Background ====== */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#f00","#ff0","#008000"]; // Ghana flag
let gradient = {r:0,g:128,b:255}; // initial blue-green overlay

function animateBG(){
  // Ghana flag stripes
  ctx.fillStyle = colors[0]; ctx.fillRect(0,0,canvas.width,canvas.height/3);
  ctx.fillStyle = colors[1]; ctx.fillRect(0,canvas.height/3,canvas.width,canvas.height/3);
  ctx.fillStyle = colors[2]; ctx.fillRect(0,(2*canvas.height)/3,canvas.width,canvas.height/3);

  // Blue-green overlay gradient
  gradient.r = (gradient.r + 0.5)%256;
  gradient.g = (gradient.g + 1)%256;
  ctx.fillStyle = `rgba(${gradient.r},${gradient.g},128,0.3)`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animateBG);
}
animateBG();

/* ===== Dark/Light Toggle ===== */
const modeBtn = document.getElementById("mode-toggle");
modeBtn.onclick = ()=>{
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* ===== Subscribe Form ===== */
document.getElementById("subscribe-form").onsubmit = e=>{
  e.preventDefault();
  const email = document.getElementById("sub-email").value;
  const phone = document.getElementById("sub-phone").value;
  const viaEmail = document.getElementById("choose-email").checked;
  const viaSMS = document.getElementById("choose-sms").checked;

  if(!email && !phone){
    document.getElementById("subscribe-message").textContent="Enter email or phone.";
    return;
  }

  fetch(`${BACKEND_URL}/subscribe`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({email,phone,viaEmail,viaSMS})
  }).then(()=>document.getElementById("subscribe-message").textContent="Subscribed!")
    .catch(()=>document.getElementById("subscribe-message").textContent="Subscription failed.");
};
