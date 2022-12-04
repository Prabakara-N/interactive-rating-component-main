//elements

const inputBtnEl = document.querySelectorAll(".rating-input");
const btnSubmit = document.getElementById("btn-submit");
const hiddenEl = document.getElementById("hidden-card");
const cardEl = document.getElementById("show");
const outputEl = document.getElementById("output");

//global variable
let rating = 0;
//functions

//event listners
for (let i = 0; i < inputBtnEl.length; i++) {
  inputBtnEl[i].addEventListener("click", function () {
    rating = Number(this.value);
    this.style.backgroundColor = "#fb7413";
    this.style.color = "#ffffff";
  });
}

btnSubmit.addEventListener("click", function () {
  cardEl.classList.remove("show");
  cardEl.classList.add("hidden");

  hiddenEl.classList.remove("hidden");
  hiddenEl.classList.add("show");

  outputEl.innerText = `You Selected ${rating} out of 5`;
});
