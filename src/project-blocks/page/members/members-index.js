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

const colors = {
  defColor: "#dcdaeb",
  red: "#c90303",
  purple: "#a103c9",
  orange: "#c97a03",
  yellow: "#c9b503",
  blue: "#0352c9",
  lightBlue: "#038ec9",
  darkBlue: "#2b03c9",
  green: "#03c952",
  pink: "#c9037a",
  redPink: "#c9033e",
};

const red = document.getElementById("red");
const btnRed = document.querySelector(".btn--red");
const purple = document.getElementById("purple");
const btnPurple = document.querySelector(".btn--purple");
const orange = document.getElementById("orange");
const btnOrange = document.querySelector(".btn--orange");
const yellow = document.getElementById("yellow");
const btnYellow = document.querySelector(".btn--yellow");
const blue = document.getElementById("blue");
const btnBlue = document.querySelector(".btn--blue");
const lightBlue = document.getElementById("light-blue");
const btnLBlue = document.querySelector(".btn--light-blue");
const darkBlue = document.getElementById("dark-blue");
const btnDBlue = document.querySelector(".btn--dark-blue");
const green = document.getElementById("green");
const btnGreen = document.querySelector(".btn--green");
const pink = document.getElementById("pink");
const btnPink = document.querySelector(".btn--pink");
const redPink = document.getElementById("red-pink");
const btnRPink = document.querySelector(".btn--red-pink");
const btnNameRed = document.querySelector(".btn__name-red");
const btnNamePurple = document.querySelector(".btn__name-purple");
const btnNameOrange = document.querySelector(".btn__name-orange");
const btnNameYellow = document.querySelector(".btn__name-yellow");
const btnNameBlue = document.querySelector(".btn__name-blue");
const btnNameLBlue = document.querySelector(".btn__name-lblue");
const btnNameDBlue = document.querySelector(".btn__name-dblue");

red.addEventListener("click", function () {
  if (red.checked) {
    console.log("checked");
    btnRed.style.backgroundColor = "#C90303";
    btnRed.style.transition = "200ms ease-in-out background-color";
    btnNameRed.style.color = "#fff";
    btnNameRed.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameRed.style.color = "#C90303";
    btnRed.style.backgroundColor = colors.defColor;
  }
});

purple.addEventListener("click", function () {
  if (purple.checked) {
    console.log("checked");
    btnPurple.style.backgroundColor = colors.purple;
    btnPurple.style.transition = "200ms ease-in-out background-color";
    btnNamePurple.style.color = "#fff";
    btnNamePurple.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNamePurple.style.color = colors.purple;
    btnPurple.style.backgroundColor = colors.defColor;
  }
});

orange.addEventListener("click", function () {
  if (orange.checked) {
    console.log("checked");
    btnOrange.style.backgroundColor = colors.orange;
    btnOrange.style.transition = "200ms ease-in-out background-color";
    btnNameOrange.style.color = "#fff";
    btnNameOrange.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameOrange.style.color = colors.orange;
    btnOrange.style.backgroundColor = colors.defColor;
  }
});

yellow.addEventListener("click", function () {
  if (yellow.checked) {
    console.log("checked");
    btnYellow.style.backgroundColor = colors.yellow;
    btnYellow.style.transition = "200ms ease-in-out background-color";
    btnNameYellow.style.color = "#fff";
    btnNameYellow.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameYellow.style.color = colors.yellow;
    btnYellow.style.backgroundColor = colors.defColor;
  }
});

blue.addEventListener("click", function () {
  if (blue.checked) {
    console.log("checked");
    btnBlue.style.backgroundColor = colors.blue;
    btnBlue.style.transition = "200ms ease-in-out background-color";
    btnNameBlue.style.color = "#fff";
    btnNameBlue.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameBlue.style.color = colors.blue;
    btnBlue.style.backgroundColor = colors.defColor;
  }
});

lightBlue.addEventListener("click", function () {
  if (lightBlue.checked) {
    console.log("checked");
    btnLBlue.style.backgroundColor = colors.lightBlue;
    btnLBlue.style.transition = "200ms ease-in-out background-color";
    btnNameLBlue.style.color = "#fff";
    btnNameLBlue.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameLBlue.style.color = colors.lightBlue;
    btnLBlue.style.backgroundColor = colors.defColor;
  }
});

darkBlue.addEventListener("click", function () {
  if (darkBlue.checked) {
    console.log("checked");
    btnDBlue.style.backgroundColor = colors.darkBlue;
    btnDBlue.style.transition = "200ms ease-in-out background-color";
    btnNameDBlue.style.color = "#fff";
    btnNameDBlue.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnNameDBlue.style.color = colors.darkBlue;
    btnDBlue.style.backgroundColor = colors.defColor;
  }
});

green.addEventListener("click", function () {
  if (green.checked) {
    console.log("checked");
    btnGreen.style.backgroundColor = colors.green;
    btnGreen.style.transition = "200ms ease-in-out background-color";
    btnName.style.color = "#fff";
    btnName.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnName.style.color = colors.green;
    btnGreen.style.backgroundColor = colors.defColor;
  }
});

pink.addEventListener("click", function () {
  if (pink.checked) {
    console.log("checked");
    btnPink.style.backgroundColor = colors.pink;
    btnPink.style.transition = "200ms ease-in-out background-color";
    btnName.style.color = "#fff";
    btnName.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnName.style.color = colors.pink;
    btnPink.style.backgroundColor = colors.defColor;
  }
});

redPink.addEventListener("click", function () {
  if (redPink.checked) {
    console.log("checked");
    btnRPink.style.backgroundColor = colors.redPink;
    btnRPink.style.transition = "200ms ease-in-out background-color";
    btnName.style.color = "#fff";
    btnName.style.transition = "200ms ease-in-out color";
  } else {
    console.log("unchecked");
    btnName.style.color = colors.redPink;
    btnRPink.style.backgroundColor = colors.defColor;
  }
});
