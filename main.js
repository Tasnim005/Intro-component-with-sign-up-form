function validateForm(event) {
  event.preventDefault();
  const firstName = document.querySelector(".firstName input").value;
  const lastName = document.querySelector(".lastName input").value;
  const email = document.querySelector(".email input").value;
  const password = document.querySelector(".password input").value;
  const errorMessage = document.querySelectorAll(".errorMessage");
  const errorIcon = document.querySelectorAll(".errorIcon");
  const inputElements = document.querySelectorAll(".inputField");
  const successMessage = document.querySelector(".success");
  const continueButton = successMessage.querySelector("button");

  let hasErrors = false;

  for (let i = 0; i < inputElements.length; i++) {
    const element = inputElements[i];
    if (
      element.value.length < 2 ||
      (i === 2 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
      (i === 3 && element.value.length < 8)
  
    ) {
      hasErrors = true;
      element.style.marginBottom = "12px";
      element.style.outline = "1px solid red";
      errorMessage[i].style.display = "block";
      errorIcon[i].style.display = "block";
    } else {
      element.style.marginBottom = "";
      element.style.outline = "";
      errorMessage[i].style.display = "none";
      errorIcon[i].style.display = "none";
    }
  }

  if (hasErrors === true) {
    return false;
  }

  successMessage.style.display = "block";

  continueButton.addEventListener("click", function () {
    // Reset the form
    inputElements.forEach((element) => {
      element.value = "";
    });
    successMessage.style.display = "none";
  });
}
