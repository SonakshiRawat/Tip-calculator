"use strict";
const bill = document.querySelector(".bill");
const custom = document.querySelector(".custom");
const percent = document.querySelectorAll(".percent");
const tipAmount = document.querySelector(".tipAmount");
const people = document.querySelector(".people");
const total = document.querySelector(".total");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".reset");

let calc = "",
  num = 0,
  element = "";

function evaluation() {
  if (people.value === "" || people.value === "0") {
    zero.textContent = "Can't be zero";
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    // console.log(this.value);
    const tip = (this.value * calc) / 100;
    tipAmount.textContent = `$${(tip / num).toFixed(2)}`;
    total.textContent = `$${((calc + tip) / num).toFixed(2)}`;
  }
}

function stateHandle() {
  console.log(this.disabled);
  console.log(people.value);
  if (people.value === "" || people.value === "0") {
    this.disabled = true; //button remains disabled
    zero.textContent = "Can't be zero";
    people.style.borderColor = "rgba(255, 0, 0, 0.459)";
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    this.disabled = false; //button is enabled
  }
}

percent.forEach((p) => p.addEventListener("click", evaluation));

bill.addEventListener("keydown", function (e) {
  calc = +(calc + e.key);
  this.style.color = "hsl(183, 100%, 15%)";
  this.style.fontSize = "25px";
  this.style.fontWeight = "700";
  this.style.textAlign = "right";
  reset.disabled = false;
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
});

people.addEventListener("keydown", function (e) {
  num = +(num + e.key);
  this.style.color = "hsl(183, 100%, 15%)";
  this.style.fontSize = "25px";
  this.style.fontWeight = "700";
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
  this.style.textAlign = "right";
  reset.disabled = false;
  custom.disabled = false;
  zero.textContent = "";
  people.style.borderColor = "hsl(172, 67%, 45%)";
});

custom.addEventListener("keydown", function (e) {
  element = +(element + e.key);
  const tip = (element * calc) / 100;
  tipAmount.textContent = `$${(tip / num).toFixed(2)}`;
  total.textContent = `$${((calc + tip) / num).toFixed(2)}`;
});

custom.addEventListener("click", stateHandle);

reset.addEventListener("click", function () {
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
  zero.textContent = "";
  bill.value = "";
  people.value = "";
  custom.value = "";
  custom.disabled = false;
  reset.disabled = true;
  reset.style.backgroundColor = "hsl(186, 14%, 43%)";
  (calc = ""), (num = 0), (element = "");
});

reset.addEventListener("mouseover", function () {
  if (reset.disabled) return;
  reset.style.backgroundColor = "hsl(185, 41%, 84%)";
});

reset.addEventListener("mouseout", function () {
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
});
