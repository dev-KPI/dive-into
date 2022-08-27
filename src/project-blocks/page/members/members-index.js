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
      list = document.querySelectorAll(".members__item");

btns.forEach( (btn) => {
  btn.addEventListener('click', ()=> {
     btn.classList.toggle("is-checked");
  });
});

const range = document.querySelector('.range-input'),
      output = document.querySelector('.range-output');

range.addEventListener('input', ()=> {
  setOutput(range,output);
});
setOutput(range, output);

function setOutput(range,output) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newValue = Number(((val - min) * 100) / (max - min));

  output.innerHTML = val;
  output.style.left = `calc(${newValue}% + (${14 - newValue * 0.25}px))`;
}

// document.querySelector('.members__buttons').addEventListener('click', (evt)=> {
//     if(evt.target.tagName !== 'BUTTON') return false;
//     let filterClass = evt.target.dataset['filter'];
//     evt.target.classList.toggle("is-checked");
//     list.forEach((el) => {
//       el.classList.remove("hide");
//       if (!el.classList.contains(filterClass)) {
//         el.classList.add("hide");
//       }
//     });


//   });


// btns.forEach(btn => {
//   btn.addEventListener("click", function (evt) {
//     let filterClass = evt.target.dataset["filter"];
//     evt.target.classList.toggle("is-checked");
//     list.forEach((el) => {
//       el.classList.remove("hide");
//       if (!el.classList.contains(filterClass)) {
//         el.classList.add("hide");
//       }
//     });
//   }); 
// });

// function filter(category, items, btn){
//     items.forEach( (item) => {
//       const isItemFiltered = !item.classList.contains(category);
//       if(isItemFiltered ){
//         item.classList.add('hide');
//         btn.classList.add("is-checked");
//       } else {
//         item.classList.remove('hide');
//         btn.classList.remove("is-checked");
//       }
//     });
// }
// btns.forEach( (btn)=> {
//   btn.addEventListener('click', (evt) => {
//     const target = evt.target;
//     const currentCategory = btn.dataset.filter;
//     filter(currentCategory,list, target);
//   });
// });

