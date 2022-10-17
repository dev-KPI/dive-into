function toggleMenu() {
  document.querySelector('.navbar').classList.toggle("navbar--open");
  document.querySelector(".burger").classList.toggle("burger--open");
  document.querySelector(".wrapper-blur").classList.toggle("wrapper-blur--show");
  document.body.style.overflow === ""
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
}

function menu() {
  //burger menu
  const burger = document.querySelector(".burger");
  const blur = document.querySelector(".wrapper-blur");
  const navbar = document.querySelector(".navbar");
  burger.addEventListener("click", toggleMenu);
  blur.addEventListener('click', ()=>{
    if(blur.classList.contains('wrapper-blur--show') && navbar.classList.contains('navbar--open') ){
      toggleMenu();
    }
  });
}

export default menu;
export { toggleMenu };
