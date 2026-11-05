let inputElement = document.getElementById("userInput");
let checkBtn = document.getElementById("checkBtn");
let resultDisplay = document.getElementById("result");

function checkInput() {
    let rawText = inputElement.value.trim();

    if (rawText === "") {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    let num = parseFloat(rawText);

      if (isNaN(num) || isNaN(Number(rawText))) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    if (num < 10) {
        resultDisplay.textContent = "The number is lower than 10";
    } else if (num > 10) {
        resultDisplay.textContent = "The number is higher than 10";
    } else {
        resultDisplay.textContent = "The number is equal to 10";
    }
}

checkBtn.addEventListener("click", checkInput);