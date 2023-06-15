import "./styles.scss";
import logoLemoncode from "./assets/logo.png"

// * Añadir logo
const logo : HTMLImageElement = document.createElement('img');

logo.src = logoLemoncode;
logo.alt = "Lemoncode's Logo";
logo.className = "container__logo";

document.querySelector('.container')?.appendChild(logo);

// * Añadir texto
const title : HTMLHeadingElement = document.createElement("h1");

title.innerText  = "Hola mundo 🤓";
title.className = "header__title"

document.querySelector('.header')?.appendChild(title);
