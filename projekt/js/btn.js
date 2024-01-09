const statusBtn = document.getElementsByClassName("status__btn");
const statusBtnArrey = Array.from(statusBtn);

console.log(statusBtnArrey);

statusBtnArrey.forEach((statusBtn) => {
  let isRed = false;

  statusBtn.addEventListener("click", () => {
    if (isRed) {
      statusBtn.style.backgroundColor = "#16c09861";
      statusBtn.textContent = "Active";
    } else {
      statusBtn.style.backgroundColor = "red";
      statusBtn.textContent = "Inactive";
    }

    isRed = !isRed;
  });
});
