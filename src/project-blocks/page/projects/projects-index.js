import "../../../index.scss";

const circles = document.querySelectorAll("#circle");
const atom = document.querySelector("#atom");

circles.forEach((circle) => {
  atom.addEventListener("mouseover", () => {
    circle.setAttribute("cx", "0");
    circle.setAttribute("cy", "0");
  });
});

const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
modalTrigger.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

const btns = document.querySelectorAll(".btn"),
      list = document.querySelectorAll(".section__item");

btns.forEach( (btn) => {
  btn.addEventListener('click', ()=> {
     btn.classList.toggle("is-checked");
  });
});

const range = document.querySelector(".range-input"),
  output = document.querySelector(".range-output");

range.addEventListener("input", () => {
  setOutput(range, output);
});
setOutput(range, output);

function setOutput(range, output) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newValue = Number(((val - min) * 100) / (max - min));

  output.innerHTML = val;
  output.style.left = `calc(${newValue}% + (${14 - newValue * 0.25}px))`;
}