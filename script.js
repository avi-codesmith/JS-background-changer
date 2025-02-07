const back = document.querySelector("body");
const input = document.querySelector("input");

input.style.cursor = "pointer";
input.addEventListener("input", () => {
  back.style.backgroundColor = input.value;
});
