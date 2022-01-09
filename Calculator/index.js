const calculator = document.querySelector(".theCalculator");
const output = document.querySelector(".output");

const myOperators = ["+", "-", "/", "="];
const rows = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const handleClick = (e) => {
  console.log(e.target.innerHTML);
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
