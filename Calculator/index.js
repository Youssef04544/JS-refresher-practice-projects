const calculator = document.querySelector(".theCalculator");
const output = document.querySelector(".output");

const myOperators = ["+", "-", "/", "*", "="];
const rows = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const handleClick = (e) => {
  let input = e.target.innerHTML;
  let outputValue = output.innerHTML;
  if (outputValue === "0") outputValue = "";
  if (myOperators.includes(input) && outputValue !== "") {
    if (myOperators.includes(outputValue[outputValue.length - 1])) {
      outputValue = outputValue.substring(0, outputValue.length - 1);
    } else {
      outputValue = eval(outputValue);
    }
    if (input !== "=") outputValue += input;
  } else {
    outputValue += input;
  }

  if (input === "C") outputValue = "0";
  output.innerHTML = outputValue;
};

document.addEventListener("DOMContentLoaded", () => {
  rows.map((row) => {
    const currentRow = document.createElement("div");
    row.map((item) => {
      const btn = document.createElement("div");
      btn.classList.add("btn");
      btn.innerHTML = item;
      btn.addEventListener("click", handleClick);
      currentRow.appendChild(btn);
    });
    calculator.appendChild(currentRow);
  });
});
