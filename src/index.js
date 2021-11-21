const operationsBtn = document.querySelectorAll("[data-operation]");
const numbersBtn = document.querySelectorAll("[data-number]");
const allClearBtn = document.querySelector("[data-all-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals");
const previousOperandTextElement = document.querySelector("previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");

let previous = 0;
let current = 0;

allClearBtn.addEventListener("click", () => {
  currentOperandTextElement.textContent = "";
  previousOperandTextElement.textContent = "";
});

const compute = () => {
  let computation;
  switch (operation) {
    case "+":
      computation = previous + current;
  }
};

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    previous += button.textContent;
    currentOperandTextElement.textContent += button.textContent;
  });
});

operationsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperandTextElement.textContent += button.textContent;
    current += button.textContent;
  });
});

equalsBtn.addEventListener("click", () => {
  compute();
})
