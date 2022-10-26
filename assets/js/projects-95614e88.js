import{t as r,a as h,m as C,f as _}from"./animationLogo-156c563c.js";import{g as f,m as p,f as u,i as c,a as g,c as v}from"./customRage-ae3d6b75.js";class k{constructor(t,e,i,s,l,a,o,n){this.id=t,this.photoSrc=e,this.title=i,this.description=s,this.members=l,this.socialLinks=n,this.languages=o,this.specialization=a,this.modalId=`modal-${this.id}`,this.features=this.languages.concat(this.specialization),this.frontendLink=this.findSocial("Frontend","link"),this.backendLink=this.findSocial("Backend","link"),this.frontendTitle=this.findSocial("Frontend","title"),this.backendTitle=this.findSocial("Backend","title")}findSocial(t,e){const i=this.socialLinks.find(({title:s})=>s===t);return i?i[e]:"#"}render(){const t=document.createElement("li");t.setAttribute("data-modal",`${this.id}`),this.specialization.length===0?t.classList.add("section__item"):(t.classList.add("section__item"),this.specialization.forEach(e=>{t.classList.add(e.toLowerCase().replace(/ |\./,""))})),t.innerHTML=`
           <span class="section__item-name">${this.title}</span>
            <a class="social__item-link section__item-link" href="https://github.com/dev-KPI">
              <svg class="social__item-link--github" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25Z" fill="#0C073E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24.9618 12.8C18.081 12.8 12.5 18.381 12.5 25.2618C12.5 30.7663 16.0933 35.43 20.9862 37.1119C21.5979 37.1884 21.8272 36.8061 21.8272 36.5003C21.8272 36.1945 21.8272 35.43 21.8272 34.3596C18.3868 35.1241 17.6223 32.6777 17.6223 32.6777C17.0872 31.2251 16.2462 30.8428 16.2462 30.8428C15.0994 30.0783 16.3226 30.0783 16.3226 30.0783C17.5459 30.1547 18.2339 31.378 18.2339 31.378C19.3807 33.2893 21.1391 32.7541 21.8272 32.4483C21.9037 31.6073 22.2859 31.0722 22.5917 30.7663C19.8394 30.4605 16.9343 29.3902 16.9343 24.5737C16.9343 23.1975 17.393 22.1272 18.2339 21.2098C18.1575 20.9804 17.6988 19.6807 18.3868 17.9988C18.3868 17.9988 19.4572 17.693 21.8272 19.2985C22.8211 18.9926 23.8914 18.9162 24.9618 18.9162C26.0321 18.9162 27.1024 19.0691 28.0963 19.2985C30.4664 17.693 31.5367 17.9988 31.5367 17.9988C32.2248 19.6807 31.7661 20.9804 31.6896 21.2862C32.4541 22.1272 32.9893 23.274 32.9893 24.6501C32.9893 29.4667 30.0841 30.4605 27.3318 30.7663C27.7905 31.1486 28.1728 31.9131 28.1728 33.0599C28.1728 34.7419 28.1728 36.0416 28.1728 36.5003C28.1728 36.8061 28.4021 37.1884 29.0138 37.1119C33.9832 35.43 37.5 30.7663 37.5 25.2618C37.4235 18.381 31.8425 12.8 24.9618 12.8Z"
                  fill="white" />
              </svg>
            </a>
            <p class="section__item-counter projects__item-counter">${this.members.length} members</p>
          `,document.querySelector(".section__list").append(t),this.modal()}modal(){const t=document.createElement("div");this.el="modal",t.classList.add(this.el),t.classList.add(this.modalId),t.innerHTML=`
      <img class="modal__close" src="${c}" alt="close" data-close />
      <div class="modal__dialog">
        <div class="modal__content">
          <img class="modal__close modal__close-inside" src="${c}" alt="close" data-close style="filter:invert(1)"/>
          <div class="modal__info">
            <img class="modal__info-img img-projects" src="${this.photoSrc?this.photoSrc:g}" alt="photo"/>
            <div class="modal__personal">
              <h2 class="modal__title">${this.title}</h2>
              <div class="modal__filters filters-projects"></div>
            </div>
          </div>
          <div class="modal__main">
            <ul class="modal__members">
             <h4 class="modal__members-title">Members:</h4>
            </ul>
            <p class="modal__text">${this.description}</p>
          </div>
          <ul class="modal__social social">
            <li class="social__item modal__social-item">
              <a class="social__item-link" href="${this.frontendLink}" target="_blank">
                <svg class="social__item-link--github light" width="100" height="100" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25Z"
                    fill="#0f1320" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.9618 12.8C18.081 12.8 12.5 18.381 12.5 25.2618C12.5 30.7663 16.0933 35.43 20.9862 37.1119C21.5979 37.1884 21.8272 36.8061 21.8272 36.5003C21.8272 36.1945 21.8272 35.43 21.8272 34.3596C18.3868 35.1241 17.6223 32.6777 17.6223 32.6777C17.0872 31.2251 16.2462 30.8428 16.2462 30.8428C15.0994 30.0783 16.3226 30.0783 16.3226 30.0783C17.5459 30.1547 18.2339 31.378 18.2339 31.378C19.3807 33.2893 21.1391 32.7541 21.8272 32.4483C21.9037 31.6073 22.2859 31.0722 22.5917 30.7663C19.8394 30.4605 16.9343 29.3902 16.9343 24.5737C16.9343 23.1975 17.393 22.1272 18.2339 21.2098C18.1575 20.9804 17.6988 19.6807 18.3868 17.9988C18.3868 17.9988 19.4572 17.693 21.8272 19.2985C22.8211 18.9926 23.8914 18.9162 24.9618 18.9162C26.0321 18.9162 27.1024 19.0691 28.0963 19.2985C30.4664 17.693 31.5367 17.9988 31.5367 17.9988C32.2248 19.6807 31.7661 20.9804 31.6896 21.2862C32.4541 22.1272 32.9893 23.274 32.9893 24.6501C32.9893 29.4667 30.0841 30.4605 27.3318 30.7663C27.7905 31.1486 28.1728 31.9131 28.1728 33.0599C28.1728 34.7419 28.1728 36.0416 28.1728 36.5003C28.1728 36.8061 28.4021 37.1884 29.0138 37.1119C33.9832 35.43 37.5 30.7663 37.5 25.2618C37.4235 18.381 31.8425 12.8 24.9618 12.8Z"
                    fill="white" />
                </svg>
              </a>
              <h6 class="modal__link-title">${this.frontendTitle}</h6>
            </li>
            <li class="social__item modal__social-item">
              <a class="social__item-link" href="${this.backendLink}" target="_blank">
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
              <h6 class="modal__link-title">${this.backendTitle}</h6>
            </li>
          </ul>
        </div>
      </div>
          `,document.querySelector(".wrapper").append(t),this.features.length!==0&&this.features.forEach(e=>{const i=document.createElement("span");i.classList.add("modal__filters-item"),i.textContent=`${e}`,document.querySelector(`.${this.modalId} .modal__filters`).append(i)}),this.members.length!==0&&this.members.forEach(e=>{const i=document.createElement("li");i.classList.add("modal__members-item"),i.textContent=`${e}`,document.querySelector(`.${this.modalId} .modal__members`).append(i)})}}function w(){f("https://sitedive.fly.dev/projects-details/?format=json").then(t=>{t.forEach(({id:e,photo_url:i,title:s,description:l,members:a,specialization:o,programming_language:n,github_links:m})=>{new k(e,i,s,l,a,o,n,m).render()})}).then(()=>d());function d(){p(),u()}}document.addEventListener("DOMContentLoaded",()=>{r(),h(),C(),_(),w(),v()});
