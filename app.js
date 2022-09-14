const btn = document.querySelector(".finishBtn");
const progBar = document.querySelectorAll("#fill");
console.log(progBar);
btn.addEventListener("click", () => {
  for (let i = 0; i < progBar.length; i++) {
    if (progBar[i].classList.contains("half")) {
      progBar[i].classList.remove("half");

      progBar[i].textContent = "100%";
    }
  }
});
