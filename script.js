var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
  "rgb(0, 128, 128)",
  "rgb(128, 0, 128)",
];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];

var colorDisplay = document.getElementById("colorDisplay");
// colorDisplay.addEventListener("click", function () {
//   alert("colorDisplay!");
// });
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      alert("You are right!");
    } else {
      alert("Try again!");
    }
  });
}
