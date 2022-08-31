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

  // add project
  // class ProjectsCard {
  //   constructor(name, link, members, parentSelector, ...classes) {
  //     this.name = name;
  //     this.link = link;
  //     this.members = members;
  //     this.classes = classes;
  //     this.parent = document.querySelector(parentSelector);
  //   }

  //   render() {
  //     const el = document.createElement("li");

  //     el.setAttribute("data-modal", "");
  //     if (this.classes.length === 0) {
  //       this.el = "section__item";
  //       el.classList.add(this.el);
  //     } else {
  //       this.classes.forEach((className) => el.classList.add(className));
  //     }
  //     el.innerHTML = `
  //       <span class="section__item-name">${this.name}</span>
  //       <a class="social__item-link section__item-link" href="${this.link}">
  //         <svg class="social__item-link--github" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25Z" fill="#0C073E" />
  //           <path fill-rule="evenodd" clip-rule="evenodd"
  //             d="M24.9618 12.8C18.081 12.8 12.5 18.381 12.5 25.2618C12.5 30.7663 16.0933 35.43 20.9862 37.1119C21.5979 37.1884 21.8272 36.8061 21.8272 36.5003C21.8272 36.1945 21.8272 35.43 21.8272 34.3596C18.3868 35.1241 17.6223 32.6777 17.6223 32.6777C17.0872 31.2251 16.2462 30.8428 16.2462 30.8428C15.0994 30.0783 16.3226 30.0783 16.3226 30.0783C17.5459 30.1547 18.2339 31.378 18.2339 31.378C19.3807 33.2893 21.1391 32.7541 21.8272 32.4483C21.9037 31.6073 22.2859 31.0722 22.5917 30.7663C19.8394 30.4605 16.9343 29.3902 16.9343 24.5737C16.9343 23.1975 17.393 22.1272 18.2339 21.2098C18.1575 20.9804 17.6988 19.6807 18.3868 17.9988C18.3868 17.9988 19.4572 17.693 21.8272 19.2985C22.8211 18.9926 23.8914 18.9162 24.9618 18.9162C26.0321 18.9162 27.1024 19.0691 28.0963 19.2985C30.4664 17.693 31.5367 17.9988 31.5367 17.9988C32.2248 19.6807 31.7661 20.9804 31.6896 21.2862C32.4541 22.1272 32.9893 23.274 32.9893 24.6501C32.9893 29.4667 30.0841 30.4605 27.3318 30.7663C27.7905 31.1486 28.1728 31.9131 28.1728 33.0599C28.1728 34.7419 28.1728 36.0416 28.1728 36.5003C28.1728 36.8061 28.4021 37.1884 29.0138 37.1119C33.9832 35.43 37.5 30.7663 37.5 25.2618C37.4235 18.381 31.8425 12.8 24.9618 12.8Z"
  //             fill="white" />
  //         </svg>
  //       </a>
  //       <a class="section__item-counter"
  //         href="${this.link}">${this.members} members
  //       </a>
  //         `;
  //     this.parent.append(el);
  //   }
  // }
  // new ProjectsCard(
  //   "DIVE INTO site",
  //   "#",
  //   "5",
  //   " .section__list",
  //   "section__item",
  //   "web",
  //   "study"
  // ).render();

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

  // custom input-range
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

  // button filters
  const btns = document.querySelectorAll(".btn"),
        list = document.querySelectorAll(".section__item");

  window.onload = () => {
    Array.from(list).forEach(
      (item) => (item.style.transition = "all 0.4s ease-out")
    );
  };

  let filters = [];
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
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
      search();
    });
  });

  //search-field && input-range filters

  const searchInput = document.querySelector(".search-input");
  // const searchBtn = document.querySelector(".search-btn");
  searchInput.addEventListener("keyup", search);
  range.addEventListener("input", search);
  // searchBtn.addEventListener("click", search);

  function search() {
    let searchWord = searchInput.value.toLowerCase();
    list.forEach((item) => {
      const membersValue = +item.children[2].textContent.replace(/members/, "");
      const title = item.firstElementChild.textContent.toLowerCase();
      if (filters.length !== 0) {
        title.includes(searchWord) && Array.from(item.classList).some((el) => filters.includes(el)) && 
          membersValue >= range.value
          ? item.classList.remove("hide")
          : item.classList.add("hide");
      } else {
        title.includes(searchWord) && membersValue >= range.value
          ? item.classList.remove("hide")
          : item.classList.add("hide");
      }
    });
  }
});
