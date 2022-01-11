const popups = document.querySelectorAll(".popup");
const outputZone = document.querySelector(".output");
const outputMessage = document.querySelector(".message");
const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", () => {
  Array.from(popups).map((popup) => {
    popup.addEventListener("click", (e) => {
      outputMessage.innerText = e.target.innerText;
      outputZone.classList.remove("hide");
    });
  });
  closeBtn.addEventListener("click", () => {
    outputZone.classList.add("hide");
  });
});
