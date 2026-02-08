// Button interaction
function showMessage() {
    alert("Thank you for visiting my website!");
}

// Time-based greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning, welcome to my website ☀️";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon, welcome to my website 🌤️";
} else {
    greeting.textContent = "Good Evening, welcome to my website 🌙";
}

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "Switch to Light Mode";
    } else {
        modeToggle.textContent = "Switch to Dark Mode";
    }
});
