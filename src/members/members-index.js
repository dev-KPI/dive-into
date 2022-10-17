import "../index.scss";
import transitionFix from "../modules/transitionFix";
import animationLogo from "../modules/animationLogo";
import menu from "../modules/menu";
import filtersMenu from "../modules/filtersMenu";
import membersCard from "../modules/membersCard";
import customRange from "../modules/customRage";
document.addEventListener("DOMContentLoaded", () => {
  transitionFix();
  animationLogo();
  menu();
  filtersMenu();
  membersCard();
  customRange();
});
