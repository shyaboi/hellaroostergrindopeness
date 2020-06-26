import Home from "../index.html";
import Styles from "./scss/app.scss";
import "bootstrap";
// importing popper since it was already in the package.json
import "popper.js";
// importing jquery since it was already in the package.json
import "jquery";

// importing hero photto
import muhHero from '../src/assets/hero.jpg'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    
const Hero = new Image();
Hero.src = muhHero
element.appendChild(Hero);

return element;
}

Hero()

console.log("working");
