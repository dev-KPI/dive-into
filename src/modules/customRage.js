function customRange(){
  // custom input-range
  const range = document.querySelector(".range-input"),
    output = document.querySelector(".range-output");

  range.addEventListener("input", () => {
    setOutputRange(range, output);
  });
  setOutputRange(range, output);
}

function setOutputRange(range, output) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newValue = Number(((val - min) * 100) / (max - min));

  output.innerHTML = val;
  output.style.left = `calc(${newValue}% + (${14 - newValue * 0.25}px))`;
}
export default customRange;