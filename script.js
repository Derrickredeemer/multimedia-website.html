/* ===== Backend URL for subscription ===== */
const BACKEND_URL = "https://YOUR-BACKEND-URL.replit.app";

/* ===== Movable Welcome Text & Greeting ===== */
const welcome = document.getElementById("welcome-msg");
let pos=0, dir=1;

function updateGreeting(){
  const hour = new Date().getHours();
  let greet = "Welcome!";
  if(hour<12) greet="Good morning!";
  else if(hour<18) greet="Good afternoon!";
  else greet="Good evening!";
  welcome.textContent = `${greet} Welcome to A.D Derrick Redeemer’s Portfolio`;
}
updateGreeting();

function moveText(){
  pos += dir * 1.5;
  if(pos>window.innerWidth-400 || pos<0) dir*=-1;
  welcome.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(moveText);
}
moveText();

/* ===== Flowing Blue & Green Background ===== */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let gradientOffset = 0;

function animateBG(){
  gradientOffset+=0.5;
  const grd = ctx.createLinearGradient(0,gradientOffset,canvas.width,canvas.height+gradientOffset);
  grd.addColorStop(0,'#00f'); // Blue
  grd.addColorStop(0.5,'#0f0'); // Green
  grd.addColorStop(1,'#00f'); // Blue
  ctx.fillStyle=grd;
  ctx.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animateBG);
}
animateBG();

/* ===== Dark/Light Mode ===== */
const modeBtn = document.getElementById("mode-toggle");
modeBtn.onclick = ()=>{
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  modeBtn.textContent = document.body.classList.contains("dark")?"☀️":"🌙";
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
