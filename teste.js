document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.querySelector("input[type='text']");
    usernameInput.addEventListener("input", function () {
      if (usernameInput.value) {
        usernameInput.classList.add("typing");
      } else {
        usernameInput.classList.remove("typing");
      }
    });
  });
  