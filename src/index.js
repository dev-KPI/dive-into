import "./index.scss";

window.addEventListener('DOMContentLoaded', ()=> {
  //atom animation
  const circles = document.querySelectorAll("#circle");
  const atom = document.querySelector("#atom");

  circles.forEach((circle) => {
    atom.addEventListener("mouseover", () => {
      circle.setAttribute("cx", "0");
      circle.setAttribute("cy", "0");
    });
  });
  
  // burger menu
  function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('navbar--open');
    document.querySelector(".burger").classList.toggle("burger--open");
    document.querySelector(".wrapper-blur").classList.toggle('wrapper-blur--show');
    document.body.classList.toggle("lock-scroll");
  };

  document.querySelector(".burger").addEventListener("click", toggleMenu);
  document.querySelector('.wrapper-blur').addEventListener('click', ()=>{
    if(document.querySelector('.wrapper-blur').classList.contains('wrapper-blur--show')){
      toggleMenu();
    }
  });

});