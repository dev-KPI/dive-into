import "../../../index.scss";
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

  //burger menu
  document.querySelector('.burger').addEventListener('click', ()=> {
    document.querySelector('.navbar').classList.toggle('navbar--open');
    document.querySelector(".burger").classList.toggle("burger--open");
    document.querySelector(".wrapper-blur").classList.toggle('wrapper-blur--show');
  });
});
