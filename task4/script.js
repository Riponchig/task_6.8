let link = document.querySelector("#myLink");

link.addEventListener("click", function(event) {
    event.preventDefault(); 
    let userInput = prompt("Введите новый текст для ссылки:");
    link.textContent = userInput; 
});