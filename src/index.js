import "./styles.scss";
import logoLemoncode from "./assets/logo.png"

const logo = document.createElement('img');

logo.src = logoLemoncode;
logo.alt = "Lemoncode's Logo";
logo.className = "container__logo";

document.querySelector('.container').appendChild(logo);