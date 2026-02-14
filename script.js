const welcome = document.getElementById("welcome-msg");

// Dynamic Greeting
function updateGreeting(){
  const hour = new Date().getHours();
  let greet = "Welcome!";
  if(hour < 12) greet = "Good Morning!";
  else if(hour < 18) greet = "Good Afternoon!";
  else greet = "Good Evening!";

  welcome.textContent = `${greet} Welcome to A.D Derrick Redeemer’s Portfolio`;
}

updateGreeting();

// Smooth Moving Text (Mobile Friendly)
let position = 0;
let direction = 1;
let speed = 1;

function moveText(){
  const screenWidth = window.innerWidth;
  const textWidth = welcome.offsetWidth;

  position += direction * speed;

  if(position + textWidth >= screenWidth || position <= 0){
    direction *= -1;
  }

  welcome.style.left = position + "px";

  requestAnimationFrame(moveText);
}

moveText();

// Generate QR Code (Frontend Only)
new QRCode(document.getElementById("qrcode"), {
  text: window.location.href,
  width: 150,
  height: 150,
  correctLevel: QRCode.CorrectLevel.H
});
