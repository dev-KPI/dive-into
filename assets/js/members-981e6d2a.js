import{t as C,a as g,m as f,f as u}from"./animationLogo-156c563c.js";import{g as p,m as v,f as w,i as m,a as L,c as k}from"./customRage-ae3d6b75.js";class ${constructor(s,t,i,a,e,l,o,n,c,d,h){this.id=s,this.photoSrc=t,this.name=i,this.surname=a,this.dateOfBirth=this.changeDateFormat(e),this.about=l,this.languages=o,this.specializations=n,this.email=c,this.socialLinks=d,this.numProjects=h,this.features=this.languages.concat(this.specializations),this.githubLink=this.link("GH"),this.linkedinLink=this.link("LD"),this.telegramLink=this.link("TG"),this.modalId=`modal-${this.id}`,this.age=this.getAge(e)}getAge(s){let t=s.split("-"),i=new Date-new Date(t[0],t[1]-1,t[2]);return Math.floor(i/1e3/60/60/24/365.25)}changeDateFormat(s){let t=s.split("-");return`${t[2]}.${t[1]}.${t[0]}`}link(s){const t=this.socialLinks.find(({social_link:i})=>i===s);return t?t.link:"#"}render(){const s=document.createElement("li");s.setAttribute("data-modal",`${this.id}`),this.features.length===0?s.classList.add("section__item"):(s.classList.add("section__item"),this.features.forEach(t=>{s.classList.add(t.toLowerCase().replace(/ |\./,""))})),s.innerHTML=`
        <span class="section__item-name">${this.name} ${this.surname}</span>
        <p class="section__item-counter">${this.numProjects} projects</p>
      `,document.querySelector(".section__list").append(s),this.modal()}modal(){const s=document.createElement("div");this.el="modal",s.classList.add(this.el),s.classList.add(this.modalId),s.innerHTML=`
      <img class="modal__close" src="${m}" alt="close" data-close />
      <div class="modal__dialog">
        <div class="modal__content">
          <img class="modal__close modal__close-inside" src="${m}" alt="close" data-close style="filter:invert(1)"/>
          <div class="modal__info">
            <img class="modal__info-img" src="${this.photoSrc?this.photoSrc:L}" alt="photo" />
            <div class="modal__personal">
              <h2 class="modal__title">${this.name} ${this.surname}</h2>
              <p class="modal__personal-age">${this.age} years (${this.dateOfBirth})</p>
              <p class="modal__personal-email">${this.email}</p>
            </div>
          </div>
          <div class="modal__filters">
          </div>
          <div class="modal__main">
            <p class="modal__text">${this.about}
          </div>
          </p>
          <ul class="modal__social social">
            <li class="social__item">
              <a class="social__item-link" href="${this.linkedinLink}" target="_blank">
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
              <a class="social__item-link" href="${this.telegramLink}" target="_blank">
                <svg class="social__item-link--telegram" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="50" fill="#0C073E"/>
                  <path d="M70 31.5056L62.4864 70.7307C62.4864 70.7307 61.4352 73.4503 58.5472 72.146L41.2114 58.3814L41.1311 58.3409C43.4727 56.1635 61.631 39.2567 62.4246 38.4903C63.6532 37.3034 62.8905 36.5968 61.464 37.4934L34.642 55.1324L24.2941 51.5269C24.2941 51.5269 22.6656 50.9271 22.509 49.6228C22.3503 48.3163 24.3477 47.6097 24.3477 47.6097L66.5328 30.4724C66.5328 30.4724 70 28.8948 70 31.5056Z" fill="white"/>
                  </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__item-link" href="${this.githubLink}" target="_blank">
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
          `,document.querySelector(".wrapper").append(s),this.features.length!==0&&this.features.forEach(t=>{const i=document.createElement("span");i.classList.add("modal__filters-item"),i.textContent=`${t}`,document.querySelector(`.${this.modalId} .modal__filters`).append(i)})}}function M(){p("https://sitedive.fly.dev/members-details/?format=json").then(s=>{s.forEach(({id:t,photo_url:i,first_name:a,last_name:e,date_of_birth:l,summary:o,programming_language:n,specialization:c,email:d,social_links:h,counter_projects:_})=>{new $(t,i,a,e,l,o,n,c,d,h,_).render()})}).then(()=>r());function r(){v(),w()}}document.addEventListener("DOMContentLoaded",()=>{C(),g(),f(),u(),M(),k()});
