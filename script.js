var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn");
var medium = document.querySelector("#mediumBtn");
// var hard = document.querySelector("#hardBtn");

easy.addEventListener("click", function () {
  medium.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

medium.addEventListener("click", function () {
  easy.classList.remove("selected");
  medium.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

// hard.addEventListener("click", function () {
//   easy.classList.remove("selected");
//   medium.classList.remove("selected");
//   hard.classList.add("selected");
//   numSquares = 9;
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      messageDisplay.style.color = "#229954";
      reset.textContent = "Play Again?";
      h1.style.backgroundColor = clickedColor;
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "#17202a";
      messageDisplay.textContent = "Try Again!";
      messageDisplay.style.color = "#E74C3C";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  //create an array
  var arr = [];
  // repeat the array
  for (var i = 0; i < num; i++) {
    // get random color and push into the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //red
  var r = Math.floor(Math.random() * 256);
  // green
  var g = Math.floor(Math.random() * 256);
  // blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click", function () {
  //generate random colors
  colors = generateRandomColor(numSquares);
  //pick new colors from the array
  pickedColor = pickColor();
  //change the display text
  messageDisplay.textContent = "";
  this.textContent = "New Colors!";
  colorDisplay.textContent = pickedColor;
  //change the display colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#2980B9";
});
