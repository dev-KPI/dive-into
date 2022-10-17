import "../index.scss";
import transitionFix from "../modules/transitionFix";
import animationLogo from "../modules/animationLogo";
import menu from "../modules/menu";
import filtersMenu from "../modules/filtersMenu";
import projectsCard from "../modules/projectsCard";
import customRange from "../modules/customRage";
document.addEventListener("DOMContentLoaded", () => {
  transitionFix();
  animationLogo();
  menu();
  filtersMenu();
  projectsCard(); 
  customRange();
});