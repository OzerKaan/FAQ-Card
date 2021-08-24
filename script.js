"use strict";

const btnArray = [
  document.getElementById("q1Btn"),
  document.getElementById("q2Btn"),
  document.getElementById("q3Btn"),
  document.getElementById("q4Btn"),
  document.getElementById("q5Btn"),
];
const ansArray = [
  document.getElementById("answer1"),
  document.getElementById("answer2"),
  document.getElementById("answer3"),
  document.getElementById("answer4"),
  document.getElementById("answer5"),
];

for (let index = 0; index < btnArray.length; index++) {
  btnArray[index].addEventListener("click", function () {
    if (btnArray[index].classList.contains("selected")) {
      ansArray[index].classList.add("hidden");
      btnArray[index].classList.remove("selected");
    } else {
      for (let index = 0; index < btnArray.length; index++) {
        ansArray[index].classList.add("hidden");
        btnArray[index].classList.remove("selected");
      }
      ansArray[index].classList.remove("hidden");
      btnArray[index].classList.add("selected");
    }
  });
}
