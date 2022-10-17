import {toggleMenu} from './menu';
import { toggleFiltersWindow } from "../modules/filtersMenu";
function transitionFix () {
  // fix transition on page load
  function returnTransition() {
    document.body.classList.remove("no-transition");
  }
  window.onload = () => {
    returnTransition();
  };

  // // fix menu on resizing window
  // let timeOutFunctionId;
  // window.addEventListener("resize", () => {
  //   document.body.classList.add("no-transition");
  //   if ( window.matchMedia("(min-width: 768px)").matches && document.querySelector('.navbar').classList.contains("navbar--open")
  //   ) {
  //     toggleMenu();
  //   }
  //   clearTimeout(timeOutFunctionId);
  //   timeOutFunctionId = setTimeout(returnTransition, 250);
  // });
  // fix menu and window on resizing window
  let timeOutFunctionId;
  window.addEventListener('resize', ()=>{
    document.body.classList.add("no-transition");
    if(window.matchMedia('(min-width: 1000px)').matches && document.querySelector('.section__filters').classList.contains('section__filters-open')){
      toggleFiltersWindow();
    } else if (window.matchMedia('(min-width: 768px)').matches && document.querySelector('.navbar').classList.contains('navbar--open')){
      toggleMenu();
    }
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(returnTransition, 250);
  });
}

export default transitionFix;