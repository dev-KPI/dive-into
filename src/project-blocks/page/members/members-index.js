import "../../../index.scss";

document.addEventListener('DOMContentLoaded', ()=> {
  // atom animation
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
    document.body.style.overflow === "" ? document.body.style.overflow="hidden" : document.body.style.overflow="";
  });
  // add member
  class MembersCard {
    constructor(id, name, surname, dateOfBirth, email, photoSrc, about, linkedinLink, discordLink, githubLink, numProjects, features) {
      this.id=id;
      this.name = name;
      this.surname = surname;
      this.dateOfBirth = dateOfBirth;
      this.email = email;
      this.photoSrc = photoSrc;
      this.about = about;
      this.linkedinLink = linkedinLink;
      this.discordLink = discordLink;
      this.githubLink = githubLink;
      this.numProjects = numProjects;
      this.features = features;

      this.modalId = `modal-${this.id}`;  
      this.age = this.getAge();   
    }
    // count age of members
    getAge() {
      let dateOfBirth = this.dateOfBirth.split('.');
      let ageInMilliseconds = new Date() - new Date(dateOfBirth[2], dateOfBirth[1]-1, dateOfBirth[0]);
      return Math.floor(ageInMilliseconds/1000/60/60/24/365.25); // convert to years
    }
    render() {
      const el = document.createElement("li");

      el.setAttribute("data-modal", `${this.id}`);
      if (this.features.length === 0) {
        el.classList.add("section__item");
      } else {
        el.classList.add("section__item");
        this.features.split(', ').forEach((feature) => el.classList.add(feature.toLowerCase().replace(/ |\./, "")));
      }
      el.innerHTML = `
            <span class="section__item-name">${this.name} ${this.surname}</span>
            <a class="section__item-counter"
              href="${this.githubLink}">${this.numProjects} projects
            </a>
          `;
      document.querySelector('.section__list').append(el);
      this.modal();
    }
    modal(){
      const el = document.createElement("div");
      this.el = `modal`;
      el.classList.add(this.el);
      el.classList.add(this.modalId);

      el.innerHTML = `
      <img class="modal__close" src="/assets/img/modal-close.svg" alt="close" data-close />
      <div class="modal__dialog">
        <div class="modal__content">
          <div class="modal__info">
            <img class="modal__info-img" src="${this.photoSrc ? this.photoSrc : "/assets/img/modal-img.png"}" alt="photo" />
            <div class="modal__personal">
              <h2 class="modal__personal-title">${this.name} ${this.surname}</h2>
              <p class="modal__personal-age">${this.age} years (${this.dateOfBirth})</p>
              <p class="modal__personal-email">${this.email}</p>
            </div>
          </div>
          <div class="modal__filters">
          </div>
          <p class="modal__text">
            ${this.about}
          </p>
          <ul class="social">
            <li class="social__item">
              <a class="social__item-link" href="${this.linkedinLink}">
                <svg class="social__item-link--linkedin" width="100" height="100" viewBox="0 0 100 100" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="50" fill="#0C073E" />
                  <path
                    d="M70 51.861V65.6502H61.9283V52.7018C61.9283 49.5067 60.7511 47.3206 57.8924 47.3206C55.7063 47.3206 54.361 48.8341 53.8565 50.1794C53.6883 50.6839 53.5202 51.3565 53.5202 52.1973V65.6502H45.4484C45.4484 65.6502 45.6166 43.7892 45.4484 41.6031H53.5202V44.9664C54.5292 43.2848 56.5471 40.9305 60.7511 40.9305C65.9641 40.9305 70 44.4619 70 51.861ZM37.0404 30C34.3498 30 32.5 31.8498 32.5 34.204C32.5 36.5583 34.1816 38.4081 36.8722 38.4081C39.7309 38.4081 41.4126 36.5583 41.4126 34.204C41.5807 31.6816 39.8991 30 37.0404 30ZM33.0045 65.6502H41.0762V41.6031H33.0045V65.6502Z"
                    fill="white" />
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__item-link" href="${this.discordLink}">
                <svg class="social__item-link--discord" width="100" height="100" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="25" fill="#0C073E" />
                  <path
                    d="M36.2844 17.5333C34.2202 15.9333 31.7432 15.1333 29.1285 15L28.7156 15.4C31.055 15.9333 33.1193 17 35.0459 18.4666C32.7064 17.2667 30.0917 16.4667 27.3394 16.2C26.5138 16.0667 25.8257 16.0667 25 16.0667C24.1743 16.0667 23.4862 16.0667 22.6606 16.2C19.9083 16.4667 17.2936 17.2667 14.9541 18.4666C16.8807 17 18.945 15.9333 21.2844 15.4L20.8715 15C18.2568 15.1333 15.7798 15.9333 13.7156 17.5333C11.3761 21.8 10.1376 26.6 10 31.5333C12.0642 33.6667 14.9541 35 17.9817 35C17.9817 35 18.945 33.9333 19.633 32.9999C17.8441 32.6 16.1927 31.6666 15.0918 30.2C16.055 30.7333 17.0183 31.2667 17.9817 31.6666C19.2202 32.2 20.4588 32.4667 21.6973 32.7334C22.7982 32.8666 23.8991 32.9999 25 32.9999C26.1009 32.9999 27.2018 32.8666 28.3027 32.7334C29.5413 32.4667 30.7798 32.2 32.0183 31.6666C32.9817 31.2667 33.945 30.7333 34.9083 30.2C33.8073 31.6666 32.1559 32.6 30.367 32.9999C31.055 33.9333 32.0183 35 32.0183 35C35.0459 35 37.9358 33.6667 40 31.5333C39.8624 26.6 38.6238 21.8 36.2844 17.5333ZM20.4587 29.1333C19.0826 29.1333 17.8441 27.9333 17.8441 26.4667C17.8441 25 19.0826 23.8 20.4587 23.8C21.8349 23.8 23.0734 25 23.0734 26.4667C23.0734 27.9333 21.8349 29.1333 20.4587 29.1333ZM29.5413 29.1333C28.1651 29.1333 26.9266 27.9333 26.9266 26.4667C26.9266 25 28.1651 23.8 29.5413 23.8C30.9174 23.8 32.1559 25 32.1559 26.4667C32.1559 27.9333 30.9174 29.1333 29.5413 29.1333Z"
                    fill="white" />
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__item-link" href="${this.githubLink}">
                <svg class="social__item-link--github" width="100" height="100" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25Z"
                    fill="#0C073E" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.9618 12.8C18.081 12.8 12.5 18.381 12.5 25.2618C12.5 30.7663 16.0933 35.43 20.9862 37.1119C21.5979 37.1884 21.8272 36.8061 21.8272 36.5003C21.8272 36.1945 21.8272 35.43 21.8272 34.3596C18.3868 35.1241 17.6223 32.6777 17.6223 32.6777C17.0872 31.2251 16.2462 30.8428 16.2462 30.8428C15.0994 30.0783 16.3226 30.0783 16.3226 30.0783C17.5459 30.1547 18.2339 31.378 18.2339 31.378C19.3807 33.2893 21.1391 32.7541 21.8272 32.4483C21.9037 31.6073 22.2859 31.0722 22.5917 30.7663C19.8394 30.4605 16.9343 29.3902 16.9343 24.5737C16.9343 23.1975 17.393 22.1272 18.2339 21.2098C18.1575 20.9804 17.6988 19.6807 18.3868 17.9988C18.3868 17.9988 19.4572 17.693 21.8272 19.2985C22.8211 18.9926 23.8914 18.9162 24.9618 18.9162C26.0321 18.9162 27.1024 19.0691 28.0963 19.2985C30.4664 17.693 31.5367 17.9988 31.5367 17.9988C32.2248 19.6807 31.7661 20.9804 31.6896 21.2862C32.4541 22.1272 32.9893 23.274 32.9893 24.6501C32.9893 29.4667 30.0841 30.4605 27.3318 30.7663C27.7905 31.1486 28.1728 31.9131 28.1728 33.0599C28.1728 34.7419 28.1728 36.0416 28.1728 36.5003C28.1728 36.8061 28.4021 37.1884 29.0138 37.1119C33.9832 35.43 37.5 30.7663 37.5 25.2618C37.4235 18.381 31.8425 12.8 24.9618 12.8Z"
                    fill="white" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
          `;
      document.querySelector(".wrapper").append(el);   
      //add features to member in modal window
      if (this.features.length !== 0) {
        this.features.split(", ").forEach((feature) => {
          const el = document.createElement("span");
          el.classList.add("modal__filters-item");
          el.textContent = `${feature}`;
          console.log(el);
          document.querySelector(`.${this.modalId} .modal__filters`).append(el);
        });
      }
    }
  }
  new MembersCard(
    "1",
    "Dima",
    "Pestenkov",
    "28.11.2004",
    "test@gmail.com",
    "",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "#",
    "#",
    "#",
    "10",
    "QA, Design, Front End"
  ).render();
  new MembersCard(
    "2",
    "Dmitriy",
    "Rezenkov",
    "02.09.2000",
    "test@gmail.com",
    "",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "#",
    "#",
    "#",
    "33",
    "Back End, Python, node.JS"
  ).render();

  // modal window
  const modalTrigger = document.querySelectorAll("[data-modal]"),
        modals = document.querySelectorAll('.modal');

  function openModal(modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  modalTrigger.forEach((btn) => {
    const idModal = btn.getAttribute("data-modal");
    const modal = document.querySelector(`.modal-${idModal}`);
    btn.addEventListener("click", (evt)=>{
      if (evt.target.tagName === "A") {
        return;
      }
      openModal(modal);
    });
  });
  
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.getAttribute("data-close") == "") {
        closeModal(modal);
      }
    });
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
    Array.from(list).forEach((item) => (item.style.transition = "all 0.4s ease-out"));
    search();
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
        .filter((item) =>!Array.from(item.classList).some((el) => filters.includes(el)))
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
      const projValue = +item.children[1].textContent.match(/\d/g).join('');
      const title = item.firstElementChild.textContent.toLowerCase();
      if (filters.length !== 0) {
        title.includes(searchWord) &&
        Array.from(item.classList).some((el) => filters.includes(el)) &&
        projValue >= range.value 
          ? item.classList.remove("hide")
          : item.classList.add("hide");
      } else {
        title.includes(searchWord) && projValue >= range.value 
          ? item.classList.remove("hide")
          : item.classList.add("hide");
      }
    });
  } 
});
