const mainBtn = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomClr = `rgb(${red},${green},${blue})`;
  return randomClr;
}
mainBtn.addEventListener("click", () => {
  const randomClr = randomColorGenerator();
  body.style.backgroundColor = randomClr;
  currentColor.textContent = randomClr;
});
