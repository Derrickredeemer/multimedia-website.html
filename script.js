/* Reset & base */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
  transition: background 0.5s, color 0.5s;
}

/* Light & Dark mode default */
body.light {
  color: #000;
  background: #fff;
}
body.dark {
  color: #fff;
  background: #111;
}

/* Header */
header {
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.5);
  color: #fff;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
}

/* Mode toggle */
#mode-toggle {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

/* Main */
main {
  padding: 20px;
}

/* Subscribe form */
#subscribe-form input[type="email"],
#subscribe-form input[type="tel"] {
  display: block;
  margin: 5px 0;
  padding: 5px;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: rgba(0,0,0,0.5);
}

/* Canvas full screen */
canvas#bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
