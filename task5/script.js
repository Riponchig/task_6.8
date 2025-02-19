let textInput = document.querySelector("#textInput");
let duplicateField = document.querySelector("#duplicateField");
let submitButton = document.querySelector("#submitButton");

textInput.addEventListener("input", () => {
    duplicateField.textContent = textInput.value;
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(textInput.value); 
    textInput.value = null;
    duplicateField.textContent = null;
});