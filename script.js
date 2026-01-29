//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus first input on load
codes[0].focus();


codes.forEach((code, index) => {

  code.addEventListener("keydown", (e) => {

    // Allow only numbers and Backspace
    if (e.key >= 0 && e.key <= 9) {

      code.value = ""; // Clear current

      // Move to next input
      setTimeout(() => {
        if (codes[index + 1]) {
          codes[index + 1].focus();
        }
      }, 10);

    }

    // Handle Backspace
    else if (e.key === "Backspace") {

      code.value = "";

      if (codes[index - 1]) {
        setTimeout(() => {
          codes[index - 1].focus();
        }, 10);
      }

    }

  });

});
