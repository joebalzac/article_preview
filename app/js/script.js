const shareButton = document.querySelector(".button__share");
const buttonPop = document.querySelector(".button__popup");

shareButton.addEventListener("click", () => {
  if (buttonPop.style.display == "none") {
    buttonPop.style.display = "flex";
  } else {
    buttonPop.style.display = "none";
  }
});
