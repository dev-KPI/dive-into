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

});
