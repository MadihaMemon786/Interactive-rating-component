var buttonsLenght = document.querySelectorAll(".star").length;
let lastIndex = -1;

for (var i = 0; i < buttonsLenght; i++) {
  document.querySelectorAll(".star")[i].addEventListener("click", function () {
    this.style.backgroundColor = "hsl(216, 12%, 54%)";
  });
}
