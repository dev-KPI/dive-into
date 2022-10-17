function filters() {
  // button filters
  const list = document.querySelectorAll(".section__item");
  const btns = document.querySelectorAll(".btn");
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
      search(list, range, searchInput, filters);
    });
  });

  //search-field && input-range filters
  const searchInput = document.querySelector(".search-input");
  const range = document.querySelector(".range-input");
  searchInput.addEventListener("keyup",()=> search(list, range, searchInput, filters));
  range.addEventListener("input", ()=> search(list, range, searchInput, filters));
}
function search(list, range, searchInput, filters) {
  let searchWord = searchInput.value.toLowerCase();
  list.forEach((item) => {
    const id = item.getAttribute("data-modal");
    const itemValue = +document.querySelector(`[data-modal="${id}"] .section__item-counter`).textContent.match(/\d/g).join("");
    const title = item.firstElementChild.textContent.toLowerCase();
    if (filters.length !== 0) {
      title.includes(searchWord) &&
      Array.from(item.classList).some((el) => filters.includes(el)) &&
      itemValue >= range.value
        ? item.classList.remove("hide")
        : item.classList.add("hide");
    } else {
      title.includes(searchWord) && itemValue >= range.value
        ? item.classList.remove("hide")
        : item.classList.add("hide");
    }
  });
  let blank = Array.from(list).every((el) => el.classList.contains("hide"));
  if (blank && list.length > 0) {
    document.querySelector(".section__blank").classList.remove("hide");
  } else {
    document.querySelector(".section__blank").classList.add("hide");
  }
}
export default filters;
export {search};