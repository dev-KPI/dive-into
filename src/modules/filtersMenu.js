function toggleFiltersWindow() {
    document.querySelector(".section__filters").classList.toggle('section__filters-open');
    document.querySelector(".wrapper-blur").classList.toggle('wrapper-blur--show');
    document.body.style.overflow === "" ? document.body.style.overflow="hidden" : document.body.style.overflow="";
  }

function filtersMenu() {
  // filters menu
  const filtersModalBtn = document.querySelector(".search-filters-btn");
  const filtersWindow = document.querySelector(".section__filters");
  const filtersClose = document.querySelector('.section__filters-close');
  const burger = document.querySelector('.burger');
  filtersModalBtn.addEventListener("click", toggleFiltersWindow);
  filtersClose.addEventListener("click", toggleFiltersWindow);
  

  // close menu
  document.querySelector(".wrapper-blur").addEventListener('click', ()=> {
    if(document.querySelector(".wrapper-blur").classList.contains('wrapper-blur--show') && filtersWindow.classList.contains('section__filters-open')){
      toggleFiltersWindow();
    }
  });
  // burger open
  burger.addEventListener("click", ()=>{
    if(filtersWindow.classList.contains('section__filters-open')){
      toggleFiltersWindow();
    }
  });

 
}

export default filtersMenu;
export {toggleFiltersWindow};