let messageParagraph = document.getElementById("message");
let changeBtn = document.getElementById("changeBtn");

function changeMessage() {
    messageParagraph.textContent = "Hello, my name is Haziq!";
}

changeBtn.addEventListener("click", changeMessage);