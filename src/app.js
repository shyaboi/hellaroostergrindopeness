import "../index.html";
import "./scss/app.scss";
let $ = require(jquery)
// autoprefixer
// import "autoprefixer";

import "bootstrap";
// importing popper since it was already in the package.json
import "popper.js";
// importing jquery since it was already in the package.json
import "jquery";


$("#heRow").css("background-image", "url(" + /src/assets/hero.jpg + ")");

// render(<Home />)
// alert('working?')