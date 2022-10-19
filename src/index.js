import "./index.scss";
import transitionFix from "./modules/transitionFix";
import animationLogo from "./modules/animationLogo";
import menu from "./modules/menu";



window.addEventListener('DOMContentLoaded', ()=> {
  transitionFix();
  animationLogo();
  menu();
});