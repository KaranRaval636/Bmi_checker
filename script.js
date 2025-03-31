const heigth = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const result = document.querySelector("#result");
const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

calculate.addEventListener("click", () => {
  const bmi = Number(weight.value) / (Number(height.value) / 100) ** 2;
  const roundedbmi = Math.round(bmi * 100) / 100;
  let feedback = "";
  result.classList.remove("underweight", "normal", "overweight", "obese");

  if (roundedbmi <= 18.5) {
    feedback = `Underweight: BMI ${roundedbmi} 🟡`;
    result.classList.add("underweight");
  } else if (roundedbmi > 18.5 && roundedbmi <= 24.9) {
    feedback = `Normal Weight: BMI ${roundedbmi} 🟢`;
    result.classList.add("normal");
  } else if (roundedbmi >= 25 && roundedbmi <= 29.9) {
    feedback = `Overweight: BMI ${roundedbmi} 🟠`;
    result.classList.add("overweight");
  } else if (roundedbmi >= 30) {
    feedback = `Obese: BMI ${roundedbmi} 🔴`;
    result.classList.add("obese");
  } else {
    feedback = "Invalid input. Please enter valid numbers.";
  }
  result.innerHTML = feedback;
  result.style.display = "block";
});

clear.addEventListener("click", () => {
  height.value = 150;
  weight.value = 50;
  age.value = 2;
  male.checked = true;
  female.checked = false;
  result.style.display = "none";
});
