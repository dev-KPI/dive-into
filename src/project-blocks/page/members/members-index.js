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


const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle('is-checked');
  });
});
