import "../../../index.scss";

document.addEventListener("DOMContentLoaded", () => {
  // atom animation
  const circles = document.querySelectorAll("#circle");
  const atom = document.querySelector("#atom");

  circles.forEach((circle) => {
    atom.addEventListener("mouseover", () => {
      circle.setAttribute("cx", "0");
      circle.setAttribute("cy", "0");
    });
  });

  // modal window
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal(evt) {
    if (evt.target.tagName === "A") {
      return;
    }
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

  // input-range
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

  //filters
  const btns = document.querySelectorAll(".btn"),
    list = document.querySelectorAll(".section__item");

  window.onload = () => {
    Array.from(list).forEach(
      (item) => (item.style.transition = "all 0.4s ease-out")
    );
  };

  let filters = [];
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      Array.from(list).forEach((item) => item.classList.remove("hide"));
      if (btn.classList.contains("is-checked")) {
        btn.classList.remove("is-checked");
        const index = filters.indexOf(btn.dataset.filter);
        filters.splice(index, 1);
      } else {
        btn.classList.add("is-checked");
        filters.push(btn.dataset.filter);
      }
      Array.from(list)
        .filter(
          (item) =>
            !Array.from(item.classList).some((el) => filters.includes(el))
        )
        .forEach((item) => item.classList.add("hide"));
      if (filters.length === 0) {
        Array.from(list).forEach((item) => item.classList.remove("hide"));
      }
    });
  });
});
