const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "crimson",
  "purple",
  "aqua",
  "aquamarine",
  "coral",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); // get random number between 0 - 3
  document.getElementById("renk").style.color = colors[randomNumber];
  document.getElementById("body").style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
