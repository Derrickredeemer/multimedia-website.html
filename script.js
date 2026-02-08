const BACKEND_URL = "https://YOUR-BACKEND-URL.replit.app";

/* MOVABLE WELCOME TEXT */
const welcome = document.getElementById("welcome-msg");
let pos = 0, dir = 1;
function moveText() {
  pos += dir * 1.5;
  if (pos > window.innerWidth - 300 || pos < 0) dir *= -1;
  welcome.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(moveText);
}
moveText();

/* INTERACTIVE BACKGROUND PARTICLES */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = Array.from({length:60}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 2
}));

function animateBG() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y += 0.5;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animateBG);
}
animateBG();

/* SUBSCRIBE FORM */
document.getElementById("subscribe-form").onsubmit = e => {
  e.preventDefault();

  const email = document.getElementById("sub-email").value;
  const phone = document.getElementById("sub-phone").value;
  const viaEmail = document.getElementById("choose-email").checked;
  const viaSMS = document.getElementById("choose-sms").checked;

  if (!email && !phone) {
    document.getElementById("subscribe-message").textContent =
      "Please enter at least an email or phone number.";
    return;
  }

  fetch(`${BACKEND_URL}/subscribe`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, phone, viaEmail, viaSMS })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("subscribe-message").textContent =
      "Subscribed successfully!";
    document.getElementById("sub-email").value = "";
    document.getElementById("sub-phone").value = "";
  })
  .catch(err => {
    document.getElementById("subscribe-message").textContent =
      "Subscription failed. Try again later.";
    console.error(err);
  });
};
