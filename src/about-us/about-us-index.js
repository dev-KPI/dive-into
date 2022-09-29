import "../index.scss";
window.addEventListener('DOMContentLoaded', ()=> {
  // fix transition on page load
  function returnTransition() {
    document.querySelector("body").classList.remove("no-transition");
  }
   window.onload = () => {
     returnTransition();
   };
  //atom animation
  const circles = document.querySelectorAll("#circle");
  const atom = document.querySelector("#atom");

  circles.forEach((circle) => {
    atom.addEventListener("mouseover", () => {
      circle.setAttribute("cx", "0");
      circle.setAttribute("cy", "0");
    });
  });

  var winX = null;
  var winY = null;

  window.addEventListener("scroll", function () {
    if (winX !== null && winY !== null) {
      window.scrollTo(winX, winY);
    }
  });

  function disableWindowScroll() {
    winX = window.scrollX;
    winY = window.scrollY;
  }

  function enableWindowScroll() {
    winX = null;
    winY = null;
  }

  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  const blur = document.querySelector(".wrapper-blur");

  //burger menu
  function toggleMenu() {
    navbar.classList.toggle("navbar--open");
    burger.classList.toggle("burger--open");
    blur.classList.toggle("wrapper-blur--show");
    winX == null ? disableWindowScroll() : enableWindowScroll();
  }

  burger.addEventListener("click", toggleMenu);
  blur.addEventListener('click', ()=>{
    if(blur.classList.contains('wrapper-blur--show')){
      toggleMenu();
    }
  });

  // fix menu on resizing window
  let timeOutFunctionId;
  window.addEventListener('resize', ()=>{
    document.body.classList.add("no-transition");
    if (window.matchMedia('(min-width: 768px)').matches && navbar.classList.contains('navbar--open')){
      toggleMenu();
    }
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(returnTransition, 250);
  });
});
