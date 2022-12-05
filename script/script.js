//elements

const inputBtnEl = document.querySelectorAll(".rating-input");
const btnSubmit = document.getElementById("btn-submit");
const hiddenEl = document.getElementById("hidden-card");
const cardEl = document.getElementById("show");
const outputEl = document.getElementById("output");
const btnOk = document.getElementById("btnok");

//global variable

let rating = 0;

//functions

const displayUI = function (index) {
  for (let i = 0; i < inputBtnEl.length; i++) {
    if (i === index) {
      inputBtnEl[i].classList.add("selected");
    } else {
      inputBtnEl[i].classList.remove("selected");
    }
  }
};

//event listners

for (let i = 0; i < inputBtnEl.length; i++) {
  inputBtnEl[i].addEventListener("click", function () {
    rating = Number(this.value);
    displayUI(rating - 1);
  });
}

//when we click submit hidden card will open

btnSubmit.addEventListener("click", function () {
  cardEl.classList.remove("show");
  cardEl.classList.add("hidden");

  hiddenEl.classList.remove("hidden");
  hiddenEl.classList.add("show");

  outputEl.innerText = `You Selected ${rating} out of 5`;
});

//when we click ok rating card will open

btnOk.addEventListener("click", function () {
  cardEl.classList.remove("hidden");
  cardEl.classList.add("show");

  hiddenEl.classList.remove("show");
  hiddenEl.classList.add("hidden");

  inputBtnEl.value = null;
  for (let i = 0; i < inputBtnEl.length; i++) {
    inputBtnEl[i].classList.remove("selected");
  }
});
